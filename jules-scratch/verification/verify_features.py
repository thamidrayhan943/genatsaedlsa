import asyncio
import re
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        base_url = "http://localhost:8000"

        # Verify the main page
        await page.goto(f"{base_url}/index.html")
        await page.wait_for_selector(".game-card", timeout=10000) # Wait for games to load
        await expect(page.locator(".game-card")).to_have_count(3)
        await page.screenshot(path="jules-scratch/verification/main_page.png")

        # Verify clicking a game
        await page.locator(".game-card").first.click()
        await expect(page).to_have_url(re.compile(".*index1.html.*"))
        await page.screenshot(path="jules-scratch/verification/game_page.png")

        # Verify the admin page
        # Set up the dialog handler BEFORE navigating
        page.on("dialog", lambda dialog: dialog.accept("nez"))

        # Now navigate, which will trigger the prompt
        await page.goto(f"{base_url}/admin.html")

        # The handler will accept the prompt, and we can now wait for the container
        await page.wait_for_selector("#admin-container")

        await expect(page.locator("#admin-container")).to_be_visible()
        await page.screenshot(path="jules-scratch/verification/admin_page.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())