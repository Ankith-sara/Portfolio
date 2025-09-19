from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5175/")

    # Wait for the main heading to be visible to ensure the page has loaded
    expect(page.get_by_role("heading", name="Crafting Digital Excellence")).to_be_visible()

    page.screenshot(path="jules-scratch/verification/homepage.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
