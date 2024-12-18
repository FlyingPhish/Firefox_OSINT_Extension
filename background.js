const gdorks = {
  general: ' AND (site:groups.google.com | site:pdffiller.com | site:prezi.com | site:play.google.com | site:apps.apple.com | site:foursquare.com | site:github.com | site:sharepoint.com | site:service-now.com | site:slideshare.net | site:trello.com)',
  paste: ' AND (site:pastebin.com | site:0bin.net | site:apaste.info | site:bitbin.it | site:cl1p.net | site:codekeep.io | site:controlc.com | site:defuse.ca | site:doxbin.org | site:dpaste.com | site:dumpz.org | site:kpaste.net | site:etherpad.org | site:everfall.com | site:friendpaste.com | site:gist.github.com)',
  documents: ' AND (ext:pdf | ext:docx | ext:doc | ext:csv | ext:xlsx | ext:txt | ext:rtf | ext:odt | ext:pptx | ext:pptm | ext:ppt | ext:xml | ext:kml)',
  dbs: ' AND (ext:sql | ext:sqlite | ext:db | ext:pdb | ext:idb | ext:cdb | ext:sis | ext:odb | ext:env | ext:cfg | ext:conf | ext:config | ext:cfm | ext:log | ext:inf)',
  code: ' AND (site:bitbucket.org | site:codeberg.org | site:codeplex.com | site:fedoraproject.org | site:github.com | site:gitlab.com | site:googlecode.com | site:sourceforge.net | site:tizen.org | site:repo.or.cz)',
  interesting: ' AND (ext:log | ext:yml | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess)',
  cloudStorage: ' AND (site:storage.googleapis.com | site:blob.core.windows.net | site:*.blob.core.windows.net | site:*.azuredatabricks.net | site:*.amazonaws.com | site:*my.sharepoint.com)',
  credentials: ' AND (ext:txt | ext:log | ext:cfg | ext:sql | ext:env | ext:yml | ext:ini | ext:html) AND (intext:"password" | intext:"DB_CONNECTION" | intext:"DB_USERNAME" | intext:"DB_PASSWORD" | intext:"API_SECRET" | intext:"API_KEY" | intext:"token" | intext:"secret" | intext:"jwt")',
  openDirectories: ' AND (intitle:"index of /" | intext:"parent directory" | intitle:"index of") AND (intext:"size" | intext:"last modified" | intext:"description" | intext:".jpg")',
  adminPortals: ' AND (inurl:admin | inurl:login | inurl:wp-admin | inurl:portal | inurl:dashboard) AND (intext:"username" | intext:"password" | intext:"admin" | intext:"administrator")',
  serverConfigs: ' AND (ext:conf | ext:cnf | ext:config | ext:txt | ext:ini | ext:yml | ext:json) AND (intext:"ServerAdmin" | intext:"server" | intext:"port" | intext:"user" | intext:"root" | intext:"nginx" | intext:"apache" | intext:"httpd" | intext:"ssl" | intext:"certificate")',
  encryptionKeys: ' AND (ext:pem | ext:ppk | ext:ssh | ext:pub | ext:cert | ext:crt | ext:key | ext:txt) AND (intext:"BEGIN RSA PRIVATE KEY" | intext:"ssh-rsa" | intext:"ssh-dsa" | intext:"BEGIN CERTIFICATE" | intext:"BEGIN PRIVATE KEY" | intext:"BEGIN PUBLIC KEY")',
  legalMatters: ' AND (site:justia.com | site:law360.com | site:leagle.com | site:scribd.com)',
  jobOpenings: ' AND (site:linkedin.com/jobs/ | site:uk.linkedin.com/jobs/ | site:indeed.com | site:glassdoor.com/jobs/) OR (intitle:"job" | intext:"job")',
  domainData: ' AND (site:who.is | site:censys.io | site:talkiewalkie.org/)',
  businessInfo: ' AND (site:find-and-update.company-information.service.gov.uk | site:sec.gov | site:corp.delaware.gov | site:sos.ca.gov | site:handelsregister.de | site:infogreffe.fr | site:registroimprese.it | site:rmc.es | site:kvk.nl | site:businesswire.com | site:hoovers.com | site:glassdoor.com | site:www.crunchbase.com | site:zoominfo.com | site:companycheck.co.uk)',
  sensitiveKeywords: ' AND (intext:"confidential" | intext:"sensitive" | intext:"top secret" | intext:"restricted" | intext:"private" | intext:"proprietary" | intext:"not for distribution" | intext:"internal use only")',
  azureResources: ' AND (site:*.cloudapp.azure.com | site:*.database.windows.net | site:*.azurewebsites.net | site:*.vault.azure.net | site:*.azure-api.net | site:*.blob.core.windows.net | site:*.servicebus.windows.net | site:*.azurecr.io | site:*.azure-mobile.net | site:*.azurefd.net | site:*.trafficmanager.net | site:*.azureedge.net | site:*.onmicrosoft.com | site:*.azmk8s.io | site:*.management.core.windows.net | site:*.azure.*)',
  m365Resources: ' AND (site:portal.office.com | site:*.office.com | site:outlook.office365.com | site:*.onedrive.com | site:teams.microsoft.com | site:forms.office.com | site:*.yammer.com | site:*.powerbi.com | site:flow.microsoft.com | site:make.powerapps.com | site:apps.powerapps.com | site:web.microsoftstream.com | site:tasks.office.com | site:to-do.office.com | site:bookings.microsoft.com | site:dynamics.microsoft.com | site:whiteboard.microsoft.com | site:admin.exchange.microsoft.com | site:aad.portal.azure.com | site:compliance.microsoft.com | site:security.microsoft.com | site:*my.sharepoint.com)',
  dockerAPIs: ' AND (intitle:"Docker Remote API" | inurl:"/containers/json" | inurl:"/images/json" | filetype:yml | "Dockerfile" | "docker-compose.yml" | "Dockerfile" | "docker-compose")',
  k8sDashboards: ' AND (inurl:"/ui/" | inurl:"/dashboard/#/login" | inurl:"/api/v1/namespaces/kubernetes-dashboard" | inurl:"/api/v1/")',
  apiDocs: ' AND (inurl:"/api/docs" | inurl:"/api-docs" | inurl:"swagger-ui.html" | inurl:"/apidocs" | inurl:"/documentation" | inurl:"/api/v1/" | inurl:"/api/v2/" | inurl:"/api/v3/" | inurl:"/rest/" | inurl:"/ws/" | inurl:"/graphql" | inurl:"/graphiql" | inurl:"/explore" | filetype:json "swagger" | filetype:yaml "swagger" | filetype:yaml | "openapi" | inurl:"/postman/collections" | inurl:"/api.raml" | inurl:"/api.wadl" | inurl:"/apigee" | inurl:"/aws-api-gateway" | inurl:"/azure-api")',
  cmsAccessPoints: ' AND (inurl:"/cms" | inurl:"/joomla" | inurl:"/wordpress" | inurl:"/wp-login.php" | inurl:"/drupal" | inurl:"/umbraco" | inurl:"/typo3" | inurl:"/modx" | inurl:"/plone" | inurl:"/dotnetnuke")',
  versionExposures: ' AND (intitle:"phpinfo()" | "PHP Version" | inurl:"/phpinfo.php" | intitle:"Apache2 Ubuntu Default Page" | "Powered by JBoss" | intext:"Tomcat/7." | intext:"Tomcat/8." | intext:"Tomcat/9." | "nginx/" "server at")',
  sqlServerErrors: ' AND ("ODBC SQL" | "mysql_fetch_row" | "syntax error" | "mysql_num_rows" | "Error Executing Database Query" | "MySQL server version for the right syntax" | "SQL command not properly ended" | "Warning: pg_connect()" | intext:"Microsoft SQL Server 20")',
  generalErrors: ' AND ("Exception in thread" | "Java Runtime" | "XML Parsing Error" | "500 Internal Server Error" | "Apache Tomcat/" | "Error Report" | "Microsoft OLE DB Provider for SQL Server" | "Fatal error: Uncaught" | "Stack trace:" | "thrown in" | ".php on line" | "Error Message : Error loading required libraries." | "Built with Flask" | "Debug mode")',
  notion: ' AND (site:notion.so)'
};
  
let tracking = false;
let domains = [];
let ignoreList = ["", "google.com", "www.google.com", "chrome://", "about:", "moz-extension://"];
  
function getMainDomain(domain) {
    let parts = domain.split(".");
    if (parts.length > 2) {
        parts.shift(); // This removes the first item from the array
    }
    return parts.join(".");
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      switch (request.command) {
        case 'toggle':
          tracking = !tracking;
          sendResponse({tracking: tracking, domains: domains});
        break;

        case 'status':
          sendResponse({tracking: tracking, domains: domains});
        break;
        
        case 'editDomain':
          let oldDomain = request.oldDomain;
          let newDomain = request.newDomain;
          let domainIndex = domains.indexOf(oldDomain);
          if (domainIndex > -1) {
            domains[domainIndex] = newDomain;
          }
          sendResponse({message: "Domain edited", domains: domains});
        break;

        case 'deleteDomain':
          let domainToDelete = request.domain;
          let index = domains.indexOf(domainToDelete);
          if (index > -1) {
            domains.splice(index, 1);
          }
          sendResponse({message: "Domain deleted", domains: domains}); // Include the updated domains
        break;

        case 'clearDomains':
          domains = [];
          sendResponse({message: "Domains list cleared"});
        break;
          
        case 'scan':
          let scanType = request.scanType;
          let scanConfig = request.scanConfig;
          let siteConfig = request.siteConfig;
          let dorkModifier = request.dorkModifier;
          let scanDomains = [...domains];

          if (siteConfig === 'domain') {
            scanDomains = scanDomains.map(domain => {
              return getMainDomain(domain);
            });
          }

          let dorkModifierPrefix;
          switch (dorkModifier) {
            case 'limit':
              dorkModifierPrefix = 'site:';
              break;
            case 'intitle':
              dorkModifierPrefix = 'intitle:';
              break;
            case 'intext':
              dorkModifierPrefix = 'intext:';
              break;
            case 'inurl':
              dorkModifierPrefix = 'inurl:';
              break;
            default:
              dorkModifierPrefix = '';
          }

          if (scanConfig === 'multi') {
            for (let domain of scanDomains) {
              let url = 'https://www.google.com/search?q=' + dorkModifierPrefix + '"' + domain + '"' + gdorks[scanType];
              chrome.tabs.create({url: url});
            }
          } else {  // 'single'
            let domainsString = scanDomains.map(domain => {
              return dorkModifierPrefix ? '(' + dorkModifierPrefix + '"' + domain + '")' : '"' + domain + '"';
            }).join(' OR ');
            let url = 'https://www.google.com/search?q=' + domainsString + gdorks[scanType];
            chrome.tabs.create({url: url});
          }
          sendResponse({message: "Scan started"});
        break;
          
        case 'setUrlConfig':
          urlConfig = request.urlConfig;
          sendResponse({});
        break;

        case 'addDomains':
          let newDomains = request.newDomains;
          // add new domains to the domains array, ignoring duplicates
          for (let domain of newDomains) {
            if (!domains.includes(domain) && domain) {
              domains.push(domain);
            }
          }
          sendResponse({message: "Domains added"});
        break;

        case 'testCaptcha':
          let gdorkKeys = Object.keys(gdorks);
          let randomKey = gdorkKeys[Math.floor(Math.random() * gdorkKeys.length)];
          let url = 'https://www.google.com/search?q="test"' + gdorks[randomKey];
          chrome.tabs.create({url: url});
          sendResponse({message: "Captcha test started"});
        break;
      }
    }
);
  
chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      if (tracking && changeInfo.status == 'complete') {
        let url = new URL(tab.url);
        // Check if the domain is in the ignore list
        if (!domains.includes(url.hostname) && !ignoreList.includes(url.hostname)) {
          domains.push(url.hostname);
        }
      }
    }
);
