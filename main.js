/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@400;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ---------- Reset ---------- */\r\n\r\n.page {\r\n  display: none;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* ---------- Body ---------- */\r\nbody {\r\n  font-family: 'Inter', Helvetica, Arial, sans-serif;\r\n  background-color: #f5f5f5;\r\n  color: #333;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* ---------- Header / Hero ---------- */\r\nheader {\r\n  position: relative;\r\n  min-height: 10vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nheader::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n  background: rgba(0, 0, 0, 0.45);\r\n  z-index: 0;\r\n}\r\n\r\n/* ---------- Navigation ---------- */\r\nnav {\r\n  position: absolute;\r\n  top: 20px;\r\n  display: flex;\r\n  gap: 20px;\r\n  z-index: 2;\r\n}\r\n\r\nnav button {\r\n  background: transparent;\r\n  border: 2px solid white;\r\n  color: white;\r\n  font-size: 15px;\r\n  padding: 8px 18px;\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n}\r\n\r\nnav button:hover {\r\n  background: white;\r\n  color: black;\r\n}\r\n\r\n/* ---------- Home Hero Text ---------- */\r\n.home-overlay {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: rgba(0, 0, 0, 0.55);\r\n  color: white;\r\n  padding: 40px;\r\n  border-radius: 12px;\r\n  max-width: 600px;\r\n  text-align: center;\r\n}\r\n\r\nheader .home-overlay h2 {\r\n  font-size: 40px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.home-overlay p {\r\n  font-size: 26px;\r\n  line-height: 1.6;\r\n}\r\n\r\n/* ---------- Landing Section ---------- */\r\n#content .landing-section > h2 {\r\n  margin-top: 50px;\r\n  font-size: 50px;\r\n  margin-left: 30px;\r\n  color: black;\r\n}\r\n\r\n#content .landing-section  p {\r\n  margin-left: 30px;\r\n  margin-top: 30px;\r\n  font-size: 28px;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n/* ---------- Images ---------- */\r\n.landing-image {\r\n  max-width: 350px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);\r\n  margin-top: 50px;\r\n}\r\n\r\n.landing-image2 {\r\n  max-width: 400px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);\r\n  height:100%;\r\n}\r\n\r\n.image-wrapper {\r\n  display: flex;\r\n  margin-left: 550px;\r\n \r\n  gap:20px;\r\n}\r\n\r\n/* ---------- Dark Section ---------- */\r\n.new-page {\r\n  background-color: #333;\r\n  margin-top: 50px;\r\n  padding-bottom: 120px;\r\n}\r\n\r\n/* 🔥 FIXED: Order & Explore (CENTER) */\r\n#content .new-page .page-heading-main {\r\n  color: aliceblue;\r\n  text-align: center;\r\n  font-size: 48px;\r\n  padding-top: 60px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* 🔥 FIXED: Sub text (CENTER) */\r\n#content .new-page .page-text-main,\r\n#content .new-page .page-text-sub {\r\n  color: aliceblue;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#content .new-page .page-text-main {\r\n  margin-top: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  \r\n}\r\n\r\n#content .new-page .page-text-sub {\r\n  margin-top: 5px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n \r\n}\r\n\r\n/* 🔥 FIXED: The Menu (LEFT) */\r\n\r\n\r\n/* ---------- Menu Layout ---------- */\r\n#content .new-page .feature-text {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1200px;\r\n \r\n  margin-top: 50px;\r\n}\r\n\r\n#content .new-page .page-text-sub2 {\r\n  color: aliceblue;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  \r\n  font-size: 25px;\r\n  text-align: left;\r\n  \r\n  margin-top: -60px;\r\n  display:block;\r\n  margin-left: 160px;\r\n  \r\n}\r\n\r\n/* ---------- Menu Image ---------- */\r\n#content .new-page .landing-image3 {\r\n  max-width: 500px;\r\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);\r\n  flex-shrink: 0;\r\n  margin-left: 150px;\r\n}\r\n#content .new-page .new-page h2,\r\n.new-page p {\r\n  color: aliceblue;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.new-page2 {\r\n  \r\n  margin-top: 100px;\r\n  padding-bottom: 120px;\r\n}\r\n\r\n\r\n#content .landing-section .new-page2 .page-text-main1 {\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  color: #2e2e2e;\r\n  font-family: 'Playfair Display', serif;\r\n  max-width: 760px;\r\n  margin: 0 auto;\r\n\r\n  text-align: center;\r\n  line-height: 1.5;\r\n  letter-spacing: 0.6px;\r\n}\r\n#content .landing-section .new-page2 .page-text-sub1 {\r\n  font-size: 27px;\r\n  font-weight: 700;\r\n  color: #6b6b6b;\r\n  font-family: 'Inter', sans-serif;\r\n  max-width: 520px;\r\n  margin: 18px auto 0;\r\n\r\n  text-align: center;\r\n  line-height: 1.7;\r\n}\r\n\r\n#content .landing-section .new-page2 {\r\n  padding: 120px 20px;\r\n  background: #fff;\r\n}\r\n\r\n#content .landing-section .new-page2 .page-text-main1::before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 46px;\r\n  height: 2px;\r\n  background: #d0d0d0;\r\n  margin: 0 auto 26px;\r\n}\r\n\r\n/* 🔴 DEBUG DIVIDER — SHOULD 100% SHOW */\r\n.new-page .dash-horizontal {\r\n  width: 100%;\r\n  margin: 40px 0;\r\n  border-top: 1.5px dashed rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n/* ---------- Menu Hero ---------- */\r\n.menu-hero {\r\n  width: 100%;\r\n}\r\n\r\n/* Dark header */\r\n.menu-title {\r\n  background: #1c1d1f;\r\n  color: #f5f2eb;\r\n  text-align: center;\r\n  padding: 80px 0;\r\n  font-size: 48px;\r\n  font-family: \"Playfair Display\", serif;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n/* Image section */\r\n.menu-image-wrapper {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 480px;\r\n  overflow: hidden;\r\n}\r\n\r\n.menu-image-wrapper img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n/* Oval badge */\r\n.menu-badge {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  padding: 34px 40px;\r\n  border: 1.5px solid rgba(255, 255, 255, 0.85);\r\n  border-radius: 50%;\r\n\r\n  color: white;\r\n  font-size: 18px;\r\n  font-family: \"Playfair Display\", serif;\r\n  letter-spacing: 1px;\r\n  background: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n/* ---------- Menu Strips ---------- */\r\n.menu-strips {\r\n  width: 100%;\r\n}\r\n\r\n.menu-strip {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 390px;\r\n  overflow: hidden;\r\n}\r\n\r\n.menu-strip img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  display: block;\r\n}\r\n\r\n/* Oval text */\r\n.menu-strip-label {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  padding: 34px 40px;\r\n  border: 1.5px solid rgba(255, 255, 255, 0.9);\r\n  border-radius: 50%;\r\n\r\n  color: white;\r\n  font-family: \"Playfair Display\", serif;\r\n  font-size: 18px;\r\n  letter-spacing: 1px;\r\n\r\n  background: rgba(0, 0, 0, 0.25);\r\n  text-align: center;\r\n}\r\n\r\n/* thin separators like reference */\r\n.menu-strip:not(:last-child) {\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n/* ---------- Menu Favorites Section ---------- */\r\n.menu-favorites {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: 780px;\r\n\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n\r\n  padding: 100px 60px;\r\n  color: #f5f2eb;\r\n}\r\n\r\n/* dark overlay */\r\n.menu-favorites::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n  background: rgba(0, 0, 0, 0.55);\r\n  z-index: 0;\r\n}\r\n\r\n/* title */\r\n.favorites-title {\r\n  position: relative;\r\n  z-index: 1;\r\n  text-align: center;\r\n  font-size: 48px;\r\n  font-family: \"Playfair Display\", serif;\r\n  letter-spacing: 2px;\r\n  margin-bottom: 160px;\r\n}\r\n\r\n/* grid */\r\n.favorites-grid {\r\n  position: relative;\r\n  z-index: 1;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 40px 80px;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* items */\r\n.favorite-item h3 {\r\n  font-size: 18px;\r\n  font-family: \"Playfair Display\", serif;\r\n  letter-spacing: 1px;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.favorite-item p {\r\n  font-size: 14px;\r\n  opacity: 0.85;\r\n}\r\n\r\n/* oval button */\r\n.favorites-btn {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  margin: 130px auto 0;\r\n  width: fit-content;\r\n\r\n  padding: 34px 40px;\r\n  border: 1.5px solid rgba(255, 255, 255, 0.9);\r\n  border-radius: 50%;\r\n\r\n  font-family: \"Playfair Display\", serif;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n\r\n  cursor: pointer;\r\n  background: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n/* ---------- Contact Hero ---------- */\r\n.contact-hero {\r\n  width: 100%;\r\n  min-height: 90vh;\r\n  background: #1c1d1f;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  text-align: center;\r\n  padding: 80px 20px;\r\n}\r\n\r\n/* Title */\r\n.contact-title {\r\n  color: #f5f2eb;\r\n  font-family: \"Playfair Display\", serif;\r\n  font-size: 48px;\r\n  letter-spacing: 2px;\r\n  line-height: 1.3;\r\n  white-space: pre-line; /* enables \\\\n line breaks */\r\n  margin-bottom: 60px;\r\n}\r\n\r\n/* Oval Button */\r\n.contact-btn {\r\n  color: #f5f2eb;\r\n  font-family: \"Playfair Display\", serif;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  line-height: 1.4;\r\n  white-space: pre-line;\r\n\r\n  padding: 20px 42px;\r\n  border: 1.5px solid rgba(255, 255, 255, 0.9);\r\n  border-radius: 999px;\r\n\r\n  cursor: pointer;\r\n  background: transparent;\r\n  transition: background 0.3s ease, color 0.3s ease;\r\n}\r\n\r\n.contact-btn:hover {\r\n  background: white;\r\n  color: #1c1d1f;\r\n}\r\n\r\n/* ---------- Contact Footer ---------- */\r\n.contact-footer {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 800px;\r\n\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/* Dark overlay */\r\n.contact-footer::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n  background: rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n/* Text block */\r\n.contact-info {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  color: #f5f2eb;\r\n  font-family: \"Playfair Display\", serif;\r\n  font-size: 26px;\r\n  line-height: 1.8;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n}\r\n\r\n.contact-info p {\r\n  margin: 2px 0;\r\n}\r\n\r\n/* ---------- In The News ---------- */\r\n.news-section {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 600px;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 70px 130px;\r\n}\r\n\r\n/* dark overlay */\r\n.news-section::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n  \r\n  z-index: 0;\r\n}\r\n\r\n/* title */\r\n.news-title {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  flex: 1;\r\n  color: #f5f2eb;\r\n  font-family: \"Playfair Display\", serif;\r\n  font-size: 48px;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n/* content box */\r\n#content .landing-section .news-section .news-box {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  background: rgba(20, 20, 20, 0.9);\r\n  padding: 40px;\r\n  max-width: 520px;\r\n\r\n  \r\n  \r\n}\r\n\r\n/* paragraphs */\r\n#content .landing-section .news-section .news-box p {\r\n  font-size: 14px;\r\n  line-height: 1.7;\r\n  margin-bottom: 30px;\r\n  color: #f5f2eb;\r\n  font-family: Georgia, serif;\r\n}\r\n\r\n/* source name */\r\n.news-section .news-box span {\r\n  display: block;\r\n  margin-top: 10px;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  \r\n}\r\n\r\n/* ---------- Testimonials ---------- */\r\n.testimonials-section {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 600px;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n\r\n  display: flex;\r\n   justify-content: space-between;\r\n  align-items: center;\r\n  padding: 80px 60px;\r\n}\r\n\r\n/* dark overlay */\r\n.testimonials-section::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n  background: rgba(0, 0, 0, 0.55);\r\n  z-index: 0;\r\n}\r\n\r\n/* quote box */\r\n#content .landing-section .testimonials-section .testimonials-box {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  background: rgba(25, 25, 25, 0.9);\r\n  padding: 40px;\r\n  max-width: 520px;\r\n\r\n \r\n  \r\n}\r\n\r\n#content .landing-section .testimonials-section .testimonials-box p {\r\n  font-size: 14px;\r\n  line-height: 1.7;\r\n  margin-bottom: 30px;\r\n  color:#f5f5f5;\r\n  font-family: Georgia, serif;\r\n}\r\n\r\n#content .landing-section .testimonials-section .testimonials-box span {\r\n  display: block;\r\n  margin-top: 10px;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n/* right title */\r\n.testimonials-title {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  color: #f5f2eb;\r\n  font-family: \"Playfair Display\", serif;\r\n  font-size: 48px;\r\n  letter-spacing: 2px;\r\n  text-align: right;\r\n}\r\n\r\n/* ---------- Footer ---------- */\r\n.site-footer {\r\n  background: #000;\r\n  color: #eaeaea;\r\n  padding: 80px 60px 40px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* top section */\r\n.footer-top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#content .landing-section .site-footer .footer-top h2 {\r\n  font-size: 32px;\r\n  font-weight: 500;\r\n  line-height: 1.3;\r\n  max-width: 600px;\r\n}\r\n\r\n.footer-cta {\r\n   border: 1px solid #fff;\r\n  background: transparent;\r\n  color: #fff;\r\n  padding: 14px 32px;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.footer-cta:hover {\r\n  background: #eaeaea;\r\n}\r\n\r\n/* divider */\r\n.footer-divider {\r\n  height: 1px;\r\n  background: #222;\r\n  margin: 50px 0;\r\n}\r\n\r\n/* columns */\r\n#content .landing-section .site-footer .footer-columns {\r\n  display: grid;\r\n  grid-template-columns: 2fr repeat(4, 1fr);\r\n  gap: 40px;\r\n}\r\n\r\n.footer-brand .footer-tagline {\r\n  font-size: 18px;\r\n  max-width: 200px;\r\n}\r\n\r\n.footer-col h4 {\r\n  font-size: 14px;\r\n  margin-bottom: 15px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n#content .landing-section .site-footer .footer-columns p {\r\n  font-size: 13px;\r\n  color: #aaa;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#content .landing-section .site-footer .footer-col p:hover {\r\n  color: white;\r\n}\r\n\r\n/* bottom */\r\n.footer-bottom {\r\n  margin-top: 60px;\r\n  border-top: 1px solid #222;\r\n  padding-top: 20px;\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n#content .landing-section .site-footer .footer-bottom p {\r\n    font-size: 13px;\r\n    color: #aaa;\r\n    margin-bottom: 10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _images_contact_footer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contact-footer.jpg */ \"./src/images/contact-footer.jpg\");\n\r\n\r\nfunction loadContact() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  /* ---------- Contact Section ---------- */\r\n  const contactSection = document.createElement(\"section\");\r\n  contactSection.classList.add(\"contact-hero\");\r\n\r\n  /* Heading */\r\n  const heading = document.createElement(\"h2\");\r\n  heading.classList.add(\"contact-title\");\r\n  heading.textContent = \"EXPERIENCE EXCELLENT\\nDINING AT ORIGIN\";\r\n\r\n  /* Button */\r\n  const button = document.createElement(\"div\");\r\n  button.classList.add(\"contact-btn\");\r\n  button.textContent = \"MAKE A\\nRESERVATION\\nTODAY\";\r\n\r\n  contactSection.appendChild(heading);\r\n  contactSection.appendChild(button);\r\n\r\n   const footer = document.createElement(\"section\");\r\n  footer.classList.add(\"contact-footer\");\r\n  footer.style.backgroundImage = `url(${_images_contact_footer_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n\r\n  const info = document.createElement(\"div\");\r\n  info.classList.add(\"contact-info\");\r\n\r\n  info.innerHTML = `\r\n    <p>123 Website St., Design By, ST Canvas</p>\r\n    <p>thankyou@forvisiting.com</p>\r\n    <p>(123) 456-7890</p>\r\n    <p>@thankyoucanvas</p>\r\n  `;\r\n\r\n  footer.appendChild(info);\r\n\r\n  content.appendChild(contactSection);\r\n  content.appendChild(footer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food.jpg */ \"./src/images/food.jpg\");\n/* harmony import */ var _images_food2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/food2.jpg */ \"./src/images/food2.jpg\");\n/* harmony import */ var _images_food_menu_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/food-menu.jpg */ \"./src/images/food-menu.jpg\");\n/* harmony import */ var _images_seat_booking_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/seat-booking.jpg */ \"./src/images/seat-booking.jpg\");\n/* harmony import */ var _images_food_online_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/food-online.jpg */ \"./src/images/food-online.jpg\");\n/* harmony import */ var _images_news_bg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/news-bg.jpg */ \"./src/images/news-bg.jpg\");\n/* harmony import */ var _images_testimonials_bg_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/testimonials-bg.jpg */ \"./src/images/testimonials-bg.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const header = document.querySelector(\"header\");\r\n\r\n  const oldHeroText = header.querySelector(\".home-overlay\");\r\n  if (oldHeroText) oldHeroText.remove();\r\n\r\n  const overlay = document.createElement(\"div\");\r\n  overlay.classList.add(\"home-overlay\");\r\n\r\n  const heading = document.createElement(\"h2\");\r\n  heading.textContent = \"Welcome to Origin Restaurant\";\r\n\r\n  const text = document.createElement(\"p\");\r\n  text.textContent = \"The best food made with love and logic.\";\r\n\r\n  overlay.appendChild(heading);\r\n  overlay.appendChild(text);\r\n  header.appendChild(overlay);\r\n\r\n  const section = document.createElement(\"section\");\r\n  section.classList.add(\"landing-section\");\r\n\r\n  const sectionHeading = document.createElement(\"h2\");\r\n  sectionHeading.textContent = \"Why Choose Us?\";\r\n\r\n  const sectionText = document.createElement(\"p\");\r\n  sectionText.textContent =\r\n    \"At Origin Restaurant, we combine fresh ingredients, skilled chefs, and a warm atmosphere to give you an unforgettable dining experience.\";\r\n\r\n  const imageWrapper = document.createElement(\"div\");\r\n  imageWrapper.classList.add(\"image-wrapper\");\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.src = _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  img.classList.add(\"landing-image\");\r\n\r\n  const img2 = document.createElement(\"img\");\r\n  img2.src = _images_food2_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n  img2.classList.add(\"landing-image2\");\r\n\r\n  imageWrapper.appendChild(img);\r\n  imageWrapper.appendChild(img2);\r\n\r\n  // -------- Dark Section --------\r\n  const page = document.createElement(\"div\");\r\n  page.classList.add(\"new-page\");\r\n\r\n  const pageHeading = document.createElement(\"h2\");\r\n  pageHeading.textContent = \"Order & Explore\";\r\n  pageHeading.classList.add(\"page-heading-main\");\r\n\r\n  const pagetext = document.createElement(\"p\");\r\n  pagetext.textContent = \"An explosion of authentic flavors served straight\";\r\n  pagetext.classList.add(\"page-text-main\");\r\n\r\n  const pagetext2 = document.createElement(\"p\");\r\n  pagetext2.textContent = \"from our kitchen to your plate.\";\r\n  pagetext2.classList.add(\"page-text-sub\");\r\n\r\n  \r\n\r\n  const hLine = document.createElement(\"div\");\r\n  hLine.classList.add(\"dash-horizontal\");\r\n\r\n\r\n  \r\n\r\n  const textBox = document.createElement(\"div\");\r\n  textBox.classList.add(\"feature-text\");\r\n\r\n  const pagetext3 = document.createElement(\"p\");\r\n  pagetext3.textContent =\r\n    \"Don't just upload a PDF. Use a mobile-friendly text menu with prices and descriptions.\";\r\n  pagetext3.classList.add(\"page-text-sub2\");\r\n\r\n  const img3 = document.createElement(\"img\");\r\n  img3.src = _images_food_menu_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n  img3.classList.add(\"landing-image3\");\r\n\r\n  textBox.appendChild(pagetext3);\r\n  textBox.appendChild(img3);\r\n  const hLine1 = document.createElement(\"div\");\r\n  hLine1.classList.add(\"dash-horizontal\");\r\n\r\n  const textBox2 = document.createElement(\"div\");\r\n  textBox2.classList.add(\"feature-text\");\r\n\r\n  \r\n\r\n  const pagetext4 = document.createElement(\"p\");\r\n  pagetext4.textContent =\r\n    \"An integrated booking widget (like OpenTable or Resy) or a simple contact form.\";\r\n  pagetext4.classList.add(\"page-text-sub2\");\r\n\r\n  const img4 = document.createElement(\"img\");\r\n  img4.src = _images_seat_booking_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n  img4.classList.add(\"landing-image3\");\r\n\r\n  \r\n  textBox2.appendChild(img4);\r\n   \r\n  textBox2.appendChild(pagetext4);\r\n\r\n  const hLine2 = document.createElement(\"div\");\r\n  hLine2.classList.add(\"dash-horizontal\");\r\n\r\n  const textBox3 = document.createElement(\"div\");\r\n  textBox3.classList.add(\"feature-text\");\r\n\r\n  \r\n\r\n  const pagetext5 = document.createElement(\"p\");\r\n  pagetext5.textContent =\r\n    \"A direct link to your delivery partners or your in-house ordering system.\";\r\n  pagetext5.classList.add(\"page-text-sub2\");\r\n\r\n  const img5 = document.createElement(\"img\");\r\n  img5.src = _images_food_online_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n  img5.classList.add(\"landing-image3\");\r\n\r\n  \r\n  \r\n   \r\n  textBox3.appendChild(pagetext5);\r\n  textBox3.appendChild(img5);\r\n  \r\n\r\n  page.appendChild(pageHeading);\r\n  \r\n  page.appendChild(pagetext);\r\n  page.appendChild(pagetext2);\r\n  \r\n  page.appendChild(hLine);\r\n  \r\n  page.appendChild(textBox);\r\n  page.appendChild(hLine1);\r\n  \r\n  page.appendChild(textBox2);\r\n\r\n  page.appendChild(hLine2);\r\n  page.appendChild(textBox3);\r\n\r\n  const page2 = document.createElement(\"div\");\r\n  page2.classList.add(\"new-page2\");\r\n\r\n  const line=document.createElement(\"p\");\r\n  line.textContent=\"Where quality ingredients meet careful craftsmanship,\";\r\n  line.classList.add(\"page-text-main1\");\r\n\r\n  const line2=document.createElement(\"p\");\r\n  line2.textContent=\"creating food worth coming back for !\"\r\n  line2.classList.add(\"page-text-sub1\");\r\n\r\n  page2.appendChild(line);\r\n  page2.appendChild(line2);\r\n\r\n \r\n\r\n  /* ---------- In the News Section ---------- */\r\n  const newsSection = document.createElement(\"section\");\r\n  newsSection.classList.add(\"news-section\");\r\n  newsSection.style.backgroundImage = `url(${_images_news_bg_jpg__WEBPACK_IMPORTED_MODULE_5__})`;\r\n\r\n  const title = document.createElement(\"h2\");\r\n  title.classList.add(\"news-title\");\r\n  title.textContent = \"IN THE NEWS\";\r\n\r\n  const box = document.createElement(\"div\");\r\n  box.classList.add(\"news-box\");\r\n\r\n  box.innerHTML = `\r\n    <p>\r\n      Origin Restaurant is redefining comfort dining with a focus on quality ingredients, thoughtful preparation, and a menu that evolves with the seasons.\r\n      <span>— THE FOOD HUB</span>\r\n    </p>\r\n\r\n    <p>\r\n      Known for its calm atmosphere and carefully curated dishes, Origin Restaurant blends modern presentation with familiar flavors that resonate.\r\n      <span>— ONLINE CUPBOARD</span>\r\n    </p>\r\n\r\n    <p>\r\n      With a commitment to craftsmanship and consistency, Origin Restaurant stands out as a destination for diners who value substance over trends.\r\n      <span>— EAT THE WORLD</span>\r\n    </p>\r\n  `;\r\n\r\n  newsSection.appendChild(title);\r\n  newsSection.appendChild(box);\r\n\r\n  const tsection = document.createElement(\"section\");\r\n  tsection.classList.add(\"testimonials-section\");\r\n  tsection.style.backgroundImage = `url(${_images_testimonials_bg_jpg__WEBPACK_IMPORTED_MODULE_6__})`;\r\n\r\n  const ttitle = document.createElement(\"h2\");\r\n  ttitle.classList.add(\"testimonials-title\");\r\n  ttitle.textContent = \"FROM CUSTOMERS\";\r\n\r\n  const tbox = document.createElement(\"div\");\r\n  tbox.classList.add(\"testimonials-box\");\r\n\r\n  \r\n\r\n  tbox.innerHTML = `\r\n    <p>\r\n      “Every dish feels thoughtfully crafted. The flavors are balanced, the ingredients feel fresh, and the experience keeps us coming back.”\r\n      <span>— Ananya, Pune</span>\r\n    </p>\r\n\r\n    <p>\r\n      “From the ambience to the plating, everything feels intentional. It’s rare to find food that feels both comforting and refined.”\r\n      <span>— Rohan, Baner</span>\r\n    </p>\r\n\r\n    <p>\r\n      “This is our go-to place for special evenings. Consistently great food, warm service, and a calm, welcoming atmosphere.”\r\n      <span>— Meera, Wakad</span>\r\n    </p>\r\n  `;\r\n\r\n  tsection.appendChild(tbox);\r\n  tsection.appendChild(ttitle);\r\n\r\n\r\n  const footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"site-footer\");\r\n\r\n  \r\n  footer.innerHTML = `\r\n    <div class=\"footer-top\">\r\n      <h2>Built around flavor, atmosphere,<br>and the joy of dining well.</h2>\r\n      <button class=\"footer-cta\">JOIN US TONIGHT</button>\r\n    </div>\r\n\r\n    <div class=\"footer-divider\"></div>\r\n\r\n    <div class=\"footer-columns\">\r\n      <div class=\"footer-brand\">\r\n        <p class=\"footer-tagline\">A website makes it real✨💫</p>\r\n      </div>\r\n\r\n      <div class=\"footer-col\">\r\n        <h4>Products</h4>\r\n        <p>Website Templates</p>\r\n        <p>Domains</p>\r\n        <p>Online Stores</p>\r\n        <p>Email Campaigns</p>\r\n        <p>Pricing</p>\r\n      </div>\r\n\r\n      <div class=\"footer-col\">\r\n        <h4>Solutions</h4>\r\n        <p>Restaurants</p>\r\n        <p>Photography</p>\r\n        <p>Fitness</p>\r\n        <p>Creators</p>\r\n        <p>Enterprise</p>\r\n      </div>\r\n\r\n      <div class=\"footer-col\">\r\n        <h4>Support</h4>\r\n        <p>Help Center</p>\r\n        <p>Forum</p>\r\n        <p>Webinars</p>\r\n        <p>Hire an Expert</p>\r\n      </div>\r\n\r\n      <div class=\"footer-col\">\r\n        <h4>Company</h4>\r\n        <p>About</p>\r\n        <p>Careers</p>\r\n        <p>Press</p>\r\n        <p>Contact</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"footer-bottom\">\r\n      <p>© 2025 Origin Restaurant. All rights reserved.😉</p>\r\n    </div>\r\n  `;\r\n\r\n\r\n  section.appendChild(sectionHeading);\r\n  section.appendChild(sectionText);\r\n  section.appendChild(imageWrapper);\r\n  section.appendChild(page);\r\n  section.appendChild(page2);\r\n  section.appendChild(newsSection);\r\n  section.appendChild(tsection);\r\n  section.appendChild(footer);\r\n  \r\n\r\n  content.appendChild(section);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?\n}");

/***/ },

/***/ "./src/images/brewImg.jpg"
/*!********************************!*\
  !*** ./src/images/brewImg.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2c7e1d3245973eea47d1.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/brewImg.jpg?\n}");

/***/ },

/***/ "./src/images/contact-footer.jpg"
/*!***************************************!*\
  !*** ./src/images/contact-footer.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4a798fa85ef9c216977b.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/contact-footer.jpg?\n}");

/***/ },

/***/ "./src/images/food-menu.jpg"
/*!**********************************!*\
  !*** ./src/images/food-menu.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3ce1819ae383d2ee92b7.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food-menu.jpg?\n}");

/***/ },

/***/ "./src/images/food-online.jpg"
/*!************************************!*\
  !*** ./src/images/food-online.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1de4f8c38d6acf7dba06.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food-online.jpg?\n}");

/***/ },

/***/ "./src/images/food.jpg"
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7e10805a998e3f0248c7.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food.jpg?\n}");

/***/ },

/***/ "./src/images/food2.jpg"
/*!******************************!*\
  !*** ./src/images/food2.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"eeb7cf3830b9d68f2018.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food2.jpg?\n}");

/***/ },

/***/ "./src/images/menu-favorites.jpg"
/*!***************************************!*\
  !*** ./src/images/menu-favorites.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0525a4dada28708e4d6d.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menu-favorites.jpg?\n}");

/***/ },

/***/ "./src/images/menu-hero.jpg"
/*!**********************************!*\
  !*** ./src/images/menu-hero.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bd5a57a987aa2c0fe5fa.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menu-hero.jpg?\n}");

/***/ },

/***/ "./src/images/news-bg.jpg"
/*!********************************!*\
  !*** ./src/images/news-bg.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3b58df95ca919c224c83.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/news-bg.jpg?\n}");

/***/ },

/***/ "./src/images/restaurant.jpg"
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9197e834946b040a5e98.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/restaurant.jpg?\n}");

/***/ },

/***/ "./src/images/seat-booking.jpg"
/*!*************************************!*\
  !*** ./src/images/seat-booking.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"757ed8811273a38660a3.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/seat-booking.jpg?\n}");

/***/ },

/***/ "./src/images/testimonials-bg.jpg"
/*!****************************************!*\
  !*** ./src/images/testimonials-bg.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e5625c30c3d0229277b4.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/testimonials-bg.jpg?\n}");

/***/ },

/***/ "./src/images/wineImg.jpg"
/*!********************************!*\
  !*** ./src/images/wineImg.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a01b67f01355d2be5a97.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/wineImg.jpg?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/restaurant.jpg */ \"./src/images/restaurant.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* ---------- Background helpers ---------- */\r\nfunction setHomeBackground() {\r\n  const header = document.querySelector(\"header\");\r\n\r\n  header.style.backgroundImage = `url(${_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_4__})`;\r\n  header.style.backgroundSize = \"cover\";\r\n  header.style.backgroundPosition = \"center\";\r\n  header.style.backgroundRepeat = \"no-repeat\";\r\n  header.style.minHeight = \"800px\";\r\n}\r\n\r\nfunction clearHeaderBackground() {\r\n  const header = document.querySelector(\"header\");\r\n\r\n  header.style.backgroundImage = \"\";\r\n  header.style.minHeight = \"\";\r\n\r\n  const heroText = header.querySelector(\".home-overlay\");\r\n  if (heroText) heroText.remove();\r\n}\r\n\r\n/* ---------- Buttons ---------- */\r\nconst homeBtn = document.getElementById(\"home-btn\");\r\nconst menuBtn = document.getElementById(\"menu-btn\");\r\nconst contactBtn = document.getElementById(\"contact-btn\");\r\n\r\n/* ---------- Initial load ---------- */\r\nsetHomeBackground();\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n/* ---------- Tab switching ---------- */\r\nhomeBtn.addEventListener(\"click\", () => {\r\n  setHomeBackground();\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  clearHeaderBackground();\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ncontactBtn.addEventListener(\"click\", () => {\r\n  clearHeaderBackground();\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _images_menu_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu-hero.jpg */ \"./src/images/menu-hero.jpg\");\n/* harmony import */ var _images_brewImg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/brewImg.jpg */ \"./src/images/brewImg.jpg\");\n/* harmony import */ var _images_wineImg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/wineImg.jpg */ \"./src/images/wineImg.jpg\");\n/* harmony import */ var _images_menu_favorites_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu-favorites.jpg */ \"./src/images/menu-favorites.jpg\");\n // use your image\r\n\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  /* ---------- Main container ---------- */\r\n  const menuHero = document.createElement(\"section\");\r\n  menuHero.classList.add(\"menu-hero\");\r\n\r\n  /* ---------- Title ---------- */\r\n  const title = document.createElement(\"h2\");\r\n  title.classList.add(\"menu-title\");\r\n  title.textContent = \"ON THE MENU\";\r\n\r\n  /* ---------- Image wrapper ---------- */\r\n  const imageWrapper = document.createElement(\"div\");\r\n  imageWrapper.classList.add(\"menu-image-wrapper\");\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.src = _images_menu_hero_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  img.alt = \"Gourmet food\";\r\n\r\n  /* ---------- Oval badge ---------- */\r\n  const badge = document.createElement(\"div\");\r\n  badge.classList.add(\"menu-badge\");\r\n  badge.textContent = \"gourmet plates\";\r\n\r\n  imageWrapper.appendChild(img);\r\n  imageWrapper.appendChild(badge);\r\n\r\n   /* ---------- Assemble ---------- */\r\n  menuHero.appendChild(title);\r\n  menuHero.appendChild(imageWrapper);\r\n\r\n  const strips = document.createElement(\"section\");\r\n  strips.classList.add(\"menu-strips\");\r\n\r\n  /* ----- Strip 1 ----- */\r\nconst strip1 = document.createElement(\"div\");\r\nstrip1.classList.add(\"menu-strip\");\r\n\r\n   const img1 = document.createElement(\"img\");\r\n    img1.src = _images_brewImg_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    img1.alt = \"Craft brews\";\r\n\r\n    const label1 = document.createElement(\"div\");\r\nlabel1.classList.add(\"menu-strip-label\");\r\nlabel1.textContent = \"craft brews\";\r\n\r\nstrip1.appendChild(img1);\r\nstrip1.appendChild(label1);\r\n\r\n/* ----- Strip 2 ----- */\r\nconst strip2 = document.createElement(\"div\");\r\nstrip2.classList.add(\"menu-strip\");\r\n\r\nconst img2 = document.createElement(\"img\");\r\nimg2.src = _images_wineImg_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\nimg2.alt = \"Wine pairings\";\r\n\r\nconst label2 = document.createElement(\"div\");\r\nlabel2.classList.add(\"menu-strip-label\");\r\nlabel2.textContent = \"wine & dish pairings\";\r\n\r\nstrip2.appendChild(img2);\r\nstrip2.appendChild(label2);\r\n\r\nstrips.appendChild(strip1);\r\nstrips.appendChild(strip2);\r\n\r\n\r\n/* ---------- Menu Favorites ---------- */\r\nconst favorites = document.createElement(\"section\");\r\nfavorites.classList.add(\"menu-favorites\");\r\n\r\n/* background image */\r\nfavorites.style.backgroundImage = `url(${_images_menu_favorites_jpg__WEBPACK_IMPORTED_MODULE_3__})`;\r\n\r\n/* title */\r\nconst favTitle = document.createElement(\"h2\");\r\nfavTitle.classList.add(\"favorites-title\");\r\nfavTitle.textContent = \"MENU FAVORITES\";\r\n\r\n/* grid */\r\nconst grid = document.createElement(\"div\");\r\ngrid.classList.add(\"favorites-grid\");\r\n\r\nconst favoritesData = [\r\n  {\r\n    name: \"TRUFFLE PASTA\",\r\n    desc: \"Handmade pasta tossed with truffle cream and aged parmesan.\",\r\n  },\r\n  {\r\n    name: \"STEAK FRITES\",\r\n    desc: \"Grilled steak served with crispy fries and herb butter.\",\r\n  },\r\n  {\r\n    name: \"MARGHERITA PIZZA\",\r\n    desc: \"San Marzano tomatoes, fresh mozzarella, and basil.\",\r\n  },\r\n  {\r\n    name: \"BUTTER CHICKEN\",\r\n    desc: \"Slow-cooked chicken in a rich, spiced tomato gravy.\",\r\n  },\r\n  {\r\n    name: \"LEMON PIE\",\r\n    desc: \"Zesty lemon filling with a buttery, crisp crust.\",\r\n  },\r\n  {\r\n    name: \"CHOCO CHIP CAKE\",\r\n    desc: \"Moist chocolate cake loaded with dark chocolate chips.\",\r\n  },\r\n];\r\n\r\n\r\nfavoritesData.forEach(dish => {\r\n  const item = document.createElement(\"div\");\r\n  item.classList.add(\"favorite-item\");\r\n\r\n  const title = document.createElement(\"h3\");\r\n  title.textContent = dish.name;\r\n\r\n  const desc = document.createElement(\"p\");\r\n  desc.textContent = dish.desc;\r\n\r\n  item.appendChild(title);\r\n  item.appendChild(desc);\r\n  grid.appendChild(item);\r\n});\r\n\r\n\r\n/* button */\r\nconst btn = document.createElement(\"div\");\r\nbtn.classList.add(\"favorites-btn\");\r\nbtn.textContent = \"View our full menu\";\r\n\r\n/* assemble */\r\nfavorites.appendChild(favTitle);\r\nfavorites.appendChild(grid);\r\nfavorites.appendChild(btn);\r\n\r\n\r\n \r\n  content.appendChild(menuHero);\r\n  content.appendChild(strips);\r\n  content.appendChild(favorites);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/Restaurant/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;