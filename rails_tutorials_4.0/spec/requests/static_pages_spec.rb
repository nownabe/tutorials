require 'spec_helper'

describe "StaticPages" do
  let(:base_title) { "Ruby on Rails Tutorial Sample App" }

  describe "GET /static_pages/home" do
    it "should have the content 'Sample App'" do
      visit "/static_pages/home"
      expect(page).to have_content("Sample App")
    end

    it "should have the right title" do
      visit "/static_pages/home"
      expect(page).to have_title(base_title)
    end

    it "should not have a custom page title" do
      visit '/static_pages/home'
      expect(page).not_to have_title("| Home")
    end
  end

  describe "GET /static_pages/help" do
    it "should have the content 'Help'" do
      visit "/static_pages/help"
      expect(page).to have_content("Help")
    end

    it "should have the right title" do
      visit "/static_pages/help"
      expect(page).to have_title("#{base_title} | Help")
    end
  end

  describe "Get /static_pages/about" do
    it "should have the content 'About Us'" do
      visit '/static_pages/about'
      expect(page).to have_content("About Us")
    end

    it "should have the right title" do
      visit "/static_pages/about"
      expect(page).to have_title("#{base_title} | About Us")
    end
  end

  describe "Get /static_pages/contact" do
    it "should have the content 'Contact'" do
      visit '/static_pages/contact'
      expect(page).to have_content("Contact")
    end

    it "should have the right title" do
      visit "/static_pages/contact"
      expect(page).to have_title("#{base_title} | Contact")
    end
  end
end
