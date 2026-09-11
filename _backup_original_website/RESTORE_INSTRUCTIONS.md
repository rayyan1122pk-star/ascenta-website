# Ascenta Original Website Backup & Restore Instructions

This directory contains the complete, unaltered backup of the original Ascenta website prior to the portfolio/builder redesign.

## How to Revert to this Original Version

### Option A: Using the PowerShell restore script
Run this command from the project root:
`powershell
powershell -ExecutionPolicy Bypass -File .\_backup_original_website\restore.ps1
`

### Option B: Using Git
If you want to switch back using Git:
`ash
git checkout backup/original-website
`
or to the tag:
`ash
git checkout v1.0.0-original-website
`

### Option C: Manual Copy
Copy the contents of _backup_original_website/src back into src/.
