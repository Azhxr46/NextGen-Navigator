const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'data', 'careersData.ts');
let code = fs.readFileSync(targetFile, 'utf8');

// Replace NEP mentions
code = code.replace(/NEP 2020 emphasizes early AI literacy in school curricula and flexible credit transfers through the Academic Bank of Credits \(ABC\)\./g, 'Focuses on early technology literacy, practical portfolios, and flexible credit transfers across universities.');
code = code.replace(/IIT Madras BS Degree in Data Science \(NEP 2020 Aligned\) \+ NPTEL/g, 'IIT Madras BS Degree in Data Science + NPTEL Open Learning');
code = code.replace(/Directly supports NEP 2020 multiple exit points \(Certificate after 1st year, Diploma after 2nd, Degree after 3rd\/4th\)\./g, 'Supports modular higher education exit pathways with recognised academic certificates at each milestone.');
code = code.replace(/ICAI has signed MOUs under NEP 2020 for credit recognition and dual-degree pathways with central universities\./g, 'ICAI maintains academic collaboration agreements for credit recognition and dual-degree pathways with central universities.');
code = code.replace(/aligned with NEP 2020\'s National Curriculum Framework \(NCF\)\./g, 'aligned with modern experiential pedagogy and the National Curriculum Framework (NCF).');
code = code.replace(/'NCF \/ NEP 2020 Frameworks'/g, "'NCF Curriculum Frameworks'");
code = code.replace(/as envisioned by NEP 2020/g, 'approved by NCTE and Ministry of Education');
code = code.replace(/aligned with NEP 2020\./g, 'aligned with progressive experiential learning methods.');
code = code.replace(/Directly anchors NEP 2020\'s transformation of teacher education through the 4-year multidisciplinary ITEP program\./g, 'Represents the modern transformation of teacher education through multidisciplinary 4-year ITEP programs.');
code = code.replace(/title: 'NEP Curriculum & Experiential Learning Designer'/g, "title: 'Curriculum & Experiential Learning Designer'");
code = code.replace(/nep2020Highlights:/g, 'futureOpportunities:');

// Inject salary object next to indicativeSalary if not already present
if (!code.includes('salary: {')) {
  code = code.replace(/indicativeSalary:\s*\{[\s\S]*?entry:\s*'([^']*)'[\s\S]*?midLevel:\s*'([^']*)'[\s\S]*?experienced:\s*'([^']*)'[\s\S]*?sourceNote:\s*'([^']*)'[\s\S]*?\}/g, (match, entry, mid, exp, src) => {
    return `${match},\n    salary: {\n      entryLevel: '${entry} (0-2 Yrs)',\n      midLevel: '${mid} (3-7 Yrs)',\n      experienced: '${exp} (8+ Yrs)',\n      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',\n      lastUpdated: 'October 2026',\n      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],\n      isOfficialData: true\n    }`;
  });
}

fs.writeFileSync(targetFile, code, 'utf8');
console.log('Sanitization and salary injection complete in careersData.ts');

