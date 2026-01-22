
// install.js - Script d'installation automatique
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('🚀 Installation de l\'extension Zenith pour VS Code...\n');

// Déterminer le chemin d'installation
let extensionPath;
if (os.platform() === 'win32') {
    extensionPath = path.join(os.homedir(), '.vscode', 'extensions', 'zenith-local-1.0.0');
} else {
    extensionPath = path.join(os.homedir(), '.vscode', 'extensions', 'zenith-local-1.0.0');
}

// Créer les dossiers
const dirs = [
    extensionPath,
    path.join(extensionPath, 'syntaxes'),
    path.join(extensionPath, 'snippets'),
    path.join(extensionPath, 'examples'),
    path.join(extensionPath, 'icons')
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Créé: ${dir}`);
    }
});

// Fonction pour copier les fichiers
function copyFile(source, target) {
    try {
        fs.copyFileSync(source, target);
        console.log(`✅ Copié: ${path.basename(source)}`);
    } catch (err) {
        console.log(`❌ Erreur pour ${source}:`, err.message);
    }
}

// Liste des fichiers à copier
const files = [
    { source: 'package.json', target: 'package.json' },
    { source: 'language-configuration.json', target: 'language-configuration.json' },
    { source: 'syntaxes/zenith.tmLanguage.json', target: 'syntaxes/zenith.tmLanguage.json' },
    { source: 'snippets/zenith-snippets.json', target: 'snippets/zenith-snippets.json' },
    { source: 'examples/vie_equilibre.zenith', target: 'examples/vie_equilibre.zenith' },
    { source: 'icons/file-light.svg', target: 'icons/file-light.svg' },
    { source: 'icons/file-dark.svg', target: 'icons/file-dark.svg' },
    { source: 'icons/zenith-icon-theme.json', target: 'icons/zenith-icon-theme.json' },
    { source: 'icons/zenith-icon.png', target: 'icons/zenith-icon.png' },
    { source: 'README.md', target: 'README.md' }
];

// Copier tous les fichiers
files.forEach(file => {
    const sourcePath = path.join(__dirname, file.source);
    const targetPath = path.join(extensionPath, file.target);
    
    if (fs.existsSync(sourcePath)) {
        copyFile(sourcePath, targetPath);
    } else {
        console.log(`⚠️  Fichier non trouvé: ${file.source}`);
    }
});

console.log('\n🎉 Installation terminée avec succès!');
console.log('\n📋 Étapes suivantes:');
console.log('1. Redémarrez VS Code');
console.log('2. Créez un fichier .zenith ou .znth');
console.log('3. Observez l\'icône Zenith dans l\'explorateur de fichiers');
console.log('4. Commencez à coder avec les snippets (target, law, event...)');
console.log('\n📍 Chemin d\'installation:', extensionPath);
