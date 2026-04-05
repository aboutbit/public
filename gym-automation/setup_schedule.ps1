# 헬스장 자동화 - 작업 스케줄러 등록 스크립트
# 관리자 권한으로 실행 필요
# 실행 방법: 이 파일 우클릭 → "PowerShell로 실행"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# 기존 작업이 있으면 삭제 후 재등록
Unregister-ScheduledTask -TaskName "GymOpen"  -Confirm:$false -ErrorAction SilentlyContinue
Unregister-ScheduledTask -TaskName "GymClose" -Confirm:$false -ErrorAction SilentlyContinue

# 오픈 작업: 월~토 05:00 유튜브 재생 (일요일 제외)
$openAction  = New-ScheduledTaskAction -Execute "$scriptDir\gym_open.bat"
$openTrigger = New-ScheduledTaskTrigger -Weekly -WeeksInterval 1 -DaysOfWeek Monday,Tuesday,Wednesday,Thursday,Friday,Saturday -At "05:00AM"
$openSettings = New-ScheduledTaskSettingsSet -WakeToRun -ExecutionTimeLimit (New-TimeSpan -Hours 20)
Register-ScheduledTask `
    -TaskName "GymOpen" `
    -Action $openAction `
    -Trigger $openTrigger `
    -Settings $openSettings `
    -RunLevel Highest `
    -Description "헬스장 오픈 - 유튜브 음악 자동 재생 (월~토)"

# 마감 작업: 매일 01:00 브라우저 종료 + 절전 (토요일 마감=일요일 새벽 1시 포함)
$closeAction  = New-ScheduledTaskAction -Execute "$scriptDir\gym_close.bat"
$closeTrigger = New-ScheduledTaskTrigger -Daily -At "01:00AM"
$closeSettings = New-ScheduledTaskSettingsSet -ExecutionTimeLimit (New-TimeSpan -Minutes 1)
Register-ScheduledTask `
    -TaskName "GymClose" `
    -Action $closeAction `
    -Trigger $closeTrigger `
    -Settings $closeSettings `
    -RunLevel Highest `
    -Description "헬스장 마감 - 브라우저 종료 및 PC 절전 (매일)"

Write-Host ""
Write-Host "✔ 등록 완료!" -ForegroundColor Green
Write-Host "  GymOpen  - 월~토 오전 05:00 유튜브 재생 (일요일 휴무)"
Write-Host "  GymClose - 매일 오전 01:00 브라우저 종료 + 절전 (토요일 마감 포함)"
Write-Host ""
Write-Host "확인: 작업 스케줄러(taskschd.msc) 실행 후 '작업 스케줄러 라이브러리'에서 GymOpen/GymClose 확인"
Write-Host ""
pause
