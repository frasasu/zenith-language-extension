
@echo off
echo ====================================
echo Installation Extension Zenith
echo ====================================
echo.

set EXTENSION_NAME=zenith-language
set VERSION=1.0.0
set EXTENSION_DIR=%USERPROFILE%\.vscode\extensions\%EXTENSION_NAME%-%VERSION%

echo 📁 Creation des dossiers...
if not exist "%EXTENSION_DIR%" mkdir "%EXTENSION_DIR%"
if not exist "%EXTENSION_DIR%\syntaxes" mkdir "%EXTENSION_DIR%\syntaxes"
if not exist "%EXTENSION_DIR%\snippets" mkdir "%EXTENSION_DIR%\snippets"
if not exist "%EXTENSION_DIR%\icons" mkdir "%EXTENSION_DIR%\icons"

echo 📦 Copie des fichiers...
copy "package.json" "%EXTENSION_DIR%\" >nul
copy "language-configuration.json" "%EXTENSION_DIR%\" >nul
copy "syntaxes\zenith.tmLanguage.json" "%EXTENSION_DIR%\syntaxes\" >nul
copy "snippets\zenith-snippets.json" "%EXTENSION_DIR%\snippets\" >nul
copy "icons\file-light.svg" "%EXTENSION_DIR%\icons\" >nul
copy "icons\file-dark.svg" "%EXTENSION_DIR%\icons\" >nul
copy "icons\zenith-icon-theme.json" "%EXTENSION_DIR%\icons\" >nul
copy "icons\zenith-icon.png" "%EXTENSION_DIR%\icons\" >nul 2>nul
copy "README.md" "%EXTENSION_DIR%\" >nul 2>nul

echo ✅ Extension installée avec succès!
echo.
echo 📋 Prochaines étapes:
echo 1. Redémarrez VS Code
echo 2. Ouvrez un fichier .zenith, .znth ou .zth
echo 3. Observez l'icône Zenith dans l'explorateur
echo 4. Tapez 'target', 'law' ou 'event' et appuyez sur Tab
echo.
echo 📍 Emplacement: %EXTENSION_DIR%
pause
