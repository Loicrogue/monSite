@echo off
setlocal enabledelayedexpansion

start cmd /k "cd .\front && npm start"
timeout /t 1 >nul