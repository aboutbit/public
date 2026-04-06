@echo off
REM 헬스장 오픈 스크립트 - 매일 새벽 5:00 실행 (월~토)
powershell -Command "Start-Process 'C:\Program Files\Google\Chrome\Application\chrome.exe' -ArgumentList '--new-window','--start-fullscreen','--autoplay-policy=no-user-gesture-required','https://www.youtube.com/watch?v=k81Gpj-YJks&loop=1&playlist=k81Gpj-YJks'"
