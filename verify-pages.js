const fs = require('fs');
const path = require('path');

const results = {
  productPages: [],
  useCasePages: [],
  aiImpactPages: [],
  errors: [],
  warnings: []
};

// Check product pages
const productPages = [
  'app/produkt/platform-overview/page.tsx',
  'app/produkt/workflow-builder/page.tsx',
  'app/produkt/ki-integration/page.tsx',
  'app/produkt/integrationen/page.tsx',
  'app/produkt/security-compliance/page.tsx',
  'app/produkt/templates/page.tsx'
];

productPages.forEach(page => {
  const filePath = path.join(process.cwd(), page);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasUseClient = content.includes('"use client"');
    const hasContentCard = content.includes('ContentCard');
    const hasSubcategories = content.includes('subcategory') || content.includes('category');
    
    results.productPages.push({
      page,
      exists: true,
      hasUseClient,
      hasContentCard,
      hasSubcategories,
      status: hasUseClient && hasSubcategories ? 'OK' : 'WARNING'
    });
    
    if (!hasUseClient && content.includes('GlassIcon')) {
      results.warnings.push(`${page}: Missing "use client" directive`);
    }
  } else {
    results.errors.push(`${page}: File not found`);
  }
});

// Check use case pages
const useCasePages = [
  'app/use-cases/branche/public-sector/page.tsx',
  'app/use-cases/branche/healthcare/page.tsx',
  'app/use-cases/branche/banking/page.tsx',
  'app/use-cases/branche/retail/page.tsx',
  'app/use-cases/branche/manufacturing/page.tsx',
  'app/use-cases/branche/legal/page.tsx',
  'app/use-cases/branche/telecom/page.tsx',
  'app/use-cases/branche/baubranche/page.tsx'
];

useCasePages.forEach(page => {
  const filePath = path.join(process.cwd(), page);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasUseClient = content.includes('"use client"');
    const hasContentCard = content.includes('ContentCard');
    const hasContent = content.includes('category') && content.includes('title');
    
    results.useCasePages.push({
      page,
      exists: true,
      hasUseClient,
      hasContentCard,
      hasContent,
      status: hasUseClient && hasContentCard && hasContent ? 'OK' : 'WARNING'
    });
    
    if (!hasUseClient && content.includes('GlassIcon')) {
      results.warnings.push(`${page}: Missing "use client" directive`);
    }
  } else {
    results.errors.push(`${page}: File not found`);
  }
});

// Check AI impact pages
const aiImpactPages = [
  'app/ai-impacts/it-ops/page.tsx',
  'app/ai-impacts/marketing/page.tsx',
  'app/ai-impacts/sales/page.tsx',
  'app/ai-impacts/secops/page.tsx',
  'app/ai-impacts/support/page.tsx'
];

aiImpactPages.forEach(page => {
  const filePath = path.join(process.cwd(), page);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasUseClient = content.includes('"use client"');
    
    results.aiImpactPages.push({
      page,
      exists: true,
      hasUseClient,
      status: hasUseClient ? 'OK' : 'WARNING'
    });
    
    if (!hasUseClient && content.includes('GlassIcon')) {
      results.warnings.push(`${page}: Missing "use client" directive`);
    }
  } else {
    results.errors.push(`${page}: File not found`);
  }
});

// Check templates page for subcategories
const templatesPage = path.join(process.cwd(), 'app/produkt/templates/page.tsx');
if (fs.existsSync(templatesPage)) {
  const content = fs.readFileSync(templatesPage, 'utf8');
  const subcategoryCount = (content.match(/subcategory:/g) || []).length;
  const categorySubcategories = content.match(/categorySubcategories:\s*Record<string,\s*string\[\]>/);
  
  results.templates = {
    exists: true,
    subcategoryCount,
    hasCategorySubcategories: !!categorySubcategories,
    status: subcategoryCount > 0 && categorySubcategories ? 'OK' : 'WARNING'
  };
}

// Print results
console.log('\n=== VERIFICATION RESULTS ===\n');
console.log('PRODUCT PAGES:');
results.productPages.forEach(p => {
  console.log(`  ${p.status === 'OK' ? '✓' : '⚠'} ${p.page}`);
  if (p.status === 'WARNING') {
    console.log(`    - Use Client: ${p.hasUseClient ? '✓' : '✗'}`);
    console.log(`    - ContentCard: ${p.hasContentCard ? '✓' : '✗'}`);
    console.log(`    - Subcategories: ${p.hasSubcategories ? '✓' : '✗'}`);
  }
});

console.log('\nUSE CASE PAGES:');
results.useCasePages.forEach(p => {
  console.log(`  ${p.status === 'OK' ? '✓' : '⚠'} ${p.page}`);
  if (p.status === 'WARNING') {
    console.log(`    - Use Client: ${p.hasUseClient ? '✓' : '✗'}`);
    console.log(`    - ContentCard: ${p.hasContentCard ? '✓' : '✗'}`);
    console.log(`    - Content: ${p.hasContent ? '✓' : '✗'}`);
  }
});

console.log('\nAI IMPACT PAGES:');
results.aiImpactPages.forEach(p => {
  console.log(`  ${p.status === 'OK' ? '✓' : '⚠'} ${p.page}`);
  if (p.status === 'WARNING') {
    console.log(`    - Use Client: ${p.hasUseClient ? '✓' : '✗'}`);
  }
});

if (results.templates) {
  console.log('\nTEMPLATES PAGE:');
  console.log(`  ${results.templates.status === 'OK' ? '✓' : '⚠'} Subcategories: ${results.templates.subcategoryCount}`);
  console.log(`    - Category Subcategories Map: ${results.templates.hasCategorySubcategories ? '✓' : '✗'}`);
}

if (results.errors.length > 0) {
  console.log('\n❌ ERRORS:');
  results.errors.forEach(e => console.log(`  - ${e}`));
}

if (results.warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  results.warnings.forEach(w => console.log(`  - ${w}`));
}

const allOk = results.errors.length === 0 && results.warnings.length === 0 &&
  results.productPages.every(p => p.status === 'OK') &&
  results.useCasePages.every(p => p.status === 'OK') &&
  results.aiImpactPages.every(p => p.status === 'OK');

console.log('\n' + '='.repeat(50));
if (allOk) {
  console.log('✅ ALL CHECKS PASSED');
  process.exit(0);
} else {
  console.log('⚠️  SOME ISSUES FOUND');
  process.exit(1);
}




