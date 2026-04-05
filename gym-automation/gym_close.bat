@echo off
REM 헬스장 마감 스크립트 - 매일 새벽 1:00 실행
REM 크롬/엣지 종료 후 PC 절전 모드

REM 브라우저 종료
taskkill /IM chrome.exe /F 2>nul
taskkill /IM msedge.exe /F 2>nul

REM 5초 대기 후 절전 모드 (최대 절전 비활성화 상태에서 Sleep 진입)
timeout /t 5 /nobreak >nul

REM 절전 모드 (Sleep) 진입
powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Application]::SetSuspendState([System.Windows.Forms.PowerState]::Suspend, $false, $false)"
