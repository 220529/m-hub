@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ========================================
echo   m-hub 部署脚本
echo ========================================
echo.

:: 获取当前日期时间作为 tag
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set tag=v%datetime:~0,8%.%datetime:~8,4%

echo 即将创建 tag: %tag%
echo.

set /p confirm=确认部署? (Y/n): 
if /i "%confirm%"=="n" (
    echo 已取消
    exit /b 0
)

:: 创建并推送 tag
git tag %tag%
if errorlevel 1 (
    echo Tag 创建失败
    exit /b 1
)

git push origin %tag%
if errorlevel 1 (
    echo Tag 推送失败
    exit /b 1
)

echo.
echo ✅ 已推送 tag: %tag%
echo 🔗 查看部署: https://github.com/220529/m-hub/actions
