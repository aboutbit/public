@echo off
REM 헬스장 마감 스크립트 - 매일 새벽 1:00 실행
powershell -Command "Get-Process chrome,msedge -ErrorAction SilentlyContinue | Stop-Process -Force; Start-Sleep 5; Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Application]::SetSuspendState([System.Windows.Forms.PowerState]::Suspend, $false, $false)"
