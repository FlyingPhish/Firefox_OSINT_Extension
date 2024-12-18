## OSINT Google Dork Scanner

The Google Dork Scanner extension is a browser tool that allows users to perform automated searches using predefined Google dork strings. It helps users find publicly exposed sensitive information or vulnerabilities on websites.

Disclaimer, this was developed very quickly for Firefox but does work in Chrome.

### Setup
**Firefox:**

You can download the extension on the Firefox extension site (https://addons.mozilla.org/en-GB/firefox/addon/osint-google-dork-scanner/)

**Dev Setup on Firefox**
1. Download locally
2. Open Firefox
3. about:debugging#/runtime/this-firefox
4. Load temporary extension
5. Select manifest.json file
6. Done

**Chrome:**
1. Extensions
2. Enable Developer Mode
3. Load folder

### How it Works

1. **Tracking**: When the extension is enabled, it keeps track of unique domains that the user visits.
2. **Scanning**: Users can choose from a variety of Google dork presets to scan for specific types of content on the visited domains.
3. **Launch Scans**: The extension provides two scanning options:
   - **Multiple Tabs**: Open separate tabs for each domain to search using the selected Google dork presets.
   - **Single Tab**: Combine all visited domains in one Google search using the selected Google dork presets.
4. **Test Google Captcha**: Users can test if Google is asking for a captcha by performing a test search using a random Google dork.

### Contributing and Expanding Presets

Contributions are welcome! If you want to add new Google dork presets or improve the extension, follow these steps:

1. Open `background.js` and locate the `gdorkPresets` object.
2. Add your new preset to the object as a key-value pair. The key should be the name of the preset, and the value should be an array of Google dork strings.
3. Update the popup UI in `popup.js` to automatically generate a button for your new preset.
4. Test your changes to ensure everything works correctly.
5. Submit a pull request with your changes to the repository.

### To-Do

- [x] Ignore-list for non-interesting domains such as google.com, extensions, browser pages etc
- [x] Add feature to choose if exact sites are used or just domains. Exact = www.domain.com, domain = domain.com
- [x] Adding list of domains to perform scan
- [x] Add GDork modifiers (now includes main ones) to restrict to site.
- [ ] Create transcript feature that keeps a record of all searches and URLs
- [ ] Add MOAR queries
- [ ] Updating Manifest version to v3 as v2 being deprecated this year
- [ ] Add function to call all presets at once.
