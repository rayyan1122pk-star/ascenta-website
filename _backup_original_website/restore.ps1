Write-Host "Restoring Ascenta original website from backup..." -ForegroundColor Cyan
Copy-Item -Recurse -Force "_backup_original_website\src\*" "src\"
Copy-Item -Recurse -Force "_backup_original_website\public\*" "public\"
Copy-Item -Force "_backup_original_website\package.json" "package.json"
Copy-Item -Force "_backup_original_website\tsconfig.json" "tsconfig.json"
Copy-Item -Force "_backup_original_website\next.config.ts" "next.config.ts"
Copy-Item -Force "_backup_original_website\components.json" "components.json"
Write-Host "Original website restored successfully!" -ForegroundColor Green
