//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 137                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", false);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("network.IDN_show_punycode", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false,
);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("dom.text_fragments.create_text_fragment.enabled", true);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

// UI
user_pref("browser.uidensity", 1);
// user_pref("browser.tabs.inTitlebar", 0);
user_pref("media.videocontrols.picture-in-picture.enabled", false);

// allow websites to ask you for your location
// allow websites to ask you to receive site notifications
user_pref("permissions.default.geo", 0);
user_pref("permissions.default.desktop-notification", 0);

// disable Firefox Sync
// disable the Firefox View tour from popping up
user_pref("identity.fxaccounts.enabled", false);
user_pref("browser.firefox-view.feature-tour", '{"screen":"","complete":true}');

// enforce DNS-over-HTTPS (DoH)
user_pref("network.trr.mode", 2);
user_pref("network.trr.max-fails", 5);

// enforce certificate pinning
// [ERROR] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
// 1 = allow user MiTM (such as your antivirus) (default)
// 2 = strict
user_pref("security.cert_pinning.enforcement_level", 2);

// disable login manager
user_pref("signon.rememberSignons", false);

// disable address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// hide site shortcut thumbnails on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// hide weather on New Tab page
user_pref("browser.newtabpage.activity-stream.showWeather", false);

// hide dropdown suggestions when clicking on the address bar
user_pref("browser.urlbar.suggest.topsites", false);

// allow websites to ask you for your location
user_pref("permissions.default.geo", 0);

// allow websites to ask you to receive site notifications
user_pref("permissions.default.desktop-notification", 0);

// Prevent accidental closing
user_pref("browser.quitShortcut.disabled", true);

// don't try to find proxies
user_pref("general.smoothScroll", false);

// Disable fullscreen transition animation
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

// Disable tab open/close/move animations
user_pref("browser.tabs.animate", false);

// Disable most cosmetic UI animations
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Request reduced motion for web content (blocks some site and UI animations)
user_pref("ui.prefersReducedMotion", 1);

// Enable smooth scrolling
user_pref("general.smoothScroll", true);

// Set home page
// user_pref("browser.startup.homepage", "/home/piyush/Documents/home/home.html");
// http://localhost:8888/home.html
// python3 -m http.server 8888
//"newtaboverride@agenedia.com":{"installation_mode":"force_installed","install_url":"https://addons.mozilla.org/firefox/downloads/latest/new-tab-override/latest.xpi"}

// Profiles disable
user_pref("browser.profiles.enabled", false);

// Dark mode
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");

// Force dark mode on all websites
user_pref("layout.css.prefers-color-scheme.content-override", 0);

// Autoscroll setup
user_pref("general.autoScroll", true);
user_pref("middlemouse.paste", false);
user_pref("middlemouse.contentLoadURL", true);

// Spell Checker
user_pref("spellchecker.dictionary", "en_US");

// Use DNS-over-HTTPS (DoH)
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://dns.google/dns-query");
user_pref("network.trr.bootstrapAddress", "8.8.8.8");

// Simple fox
// user_pref("layers.acceleration.force-enabled", true);
// user_pref("gfx.webrender.all", true);
// user_pref("svg.context-properties.content.enabled", true);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/
