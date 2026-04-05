@echo off
REM 헬스장 오픈 스크립트 - 매일 새벽 5:00 실행
REM 유튜브 음악을 크롬으로 자동 재생 (전체화면 + 반복)

set YOUTUBE_URL=https://www.youtube.com/watch?v=k81Gpj-YJks^&loop=1^&playlist=k81Gpj-YJks

REM Chrome 경로 탐색 (일반 설치 → 사용자 설치 순서로 시도)
set CHROME_PATH=
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    set CHROME_PATH=C:\Program Files\Google\Chrome\Application\chrome.exe
) else if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    set CHROME_PATH=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
) else if exist "%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe" (
    set CHROME_PATH=%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe
)

if "%CHROME_PATH%"=="" (
    REM Chrome 없으면 Edge(Windows 기본 브라우저) 사용
    start msedge --new-window --start-fullscreen --autoplay-policy=no-user-gesture-required "%YOUTUBE_URL%"
) else (
    start "" "%CHROME_PATH%" --new-window --start-fullscreen --autoplay-policy=no-user-gesture-required "%YOUTUBE_URL%"
)
