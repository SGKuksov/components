(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["components"] = factory();
	else
		root["components"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
!function() {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./src/dropdown/Dropdown.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dropdown = void 0;
function createDropdown(selector, content, type = 'left') {
    let className = '';
    let button = null;
    if (type === 'left') {
        className = 'dropdown_left';
    }
    if (type === 'right') {
        className = 'dropdown_right';
    }
    if (typeof selector === 'string') {
        button = document.querySelector(`[data-dropdown-open="${selector}"]`);
    }
    if (selector instanceof Element) {
        button = selector;
    }
    if (!button)
        return;
    const id = button.dataset.dropdownOpen;
    if (!id)
        return;
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown', className);
    dropdown.dataset.dropdown = id;
    dropdown.innerHTML = `
    <div class="dropdown__content" data-dropdown-content>
        ${content}
        
        <button data-dropdown-close>Х</button>
    </div>   
  `;
    // @ts-ignore
    button.parentNode.insertBefore(dropdown, button.nextSibling);
    dropdown.prepend(button);
}
function Dropdown() {
    let _isOpen = false;
    function open(id) {
        const selector = `[data-dropdown="${id}"]`;
        const dropdown = document.querySelector(selector);
        if (!dropdown)
            return;
        dropdown.classList.add('dropdown_open');
        setTimeout(() => {
            dropdown.classList.add('dropdown_visible');
        }, 300);
    }
    function close(dropdown) {
        dropdown.classList.remove('dropdown_visible');
        setTimeout(() => {
            dropdown.classList.remove('dropdown_open');
        }, 200);
    }
    function closeAll() {
        const selector = `[data-dropdown]`;
        const dropdowns = Array.from(document.querySelectorAll(selector));
        dropdowns.forEach(item => {
            close(item);
            // enablePageScroll(item);
        });
        // clearQueueScrollLocks();
    }
    function documentClickHandler(e) {
        const target = e.target;
        if (_isOpen) {
            // Close all
            const currentDropdown = target.closest('[data-dropdown]');
            const closeBtn = target.closest('[data-dropdown-close]');
            const openBtn = target.closest('[data-dropdown-open]');
            if (!currentDropdown || closeBtn || openBtn) {
                closeAll();
                _isOpen = false;
            }
            // clearQueueScrollLocks();
            // enablePageScroll(currentDropdown);
        }
        else {
            const dropdownTrigger = target.closest('[data-dropdown-open]');
            if (!dropdownTrigger)
                return;
            // Open
            const id = dropdownTrigger.dataset.dropdownOpen;
            if (id) {
                open(id);
                // disablePageScroll();
                _isOpen = true;
            }
        }
    }
    function documentKeyupHandler(e) {
        if (e.key === 'Escape') {
            closeAll();
            _isOpen = false;
        }
    }
    function init() {
        document.addEventListener('click', documentClickHandler);
        document.addEventListener('keyup', documentKeyupHandler);
    }
    function destroy() {
        document.removeEventListener('click', documentClickHandler);
        document.removeEventListener('keyup', documentKeyupHandler);
    }
    return {
        init,
        destroy,
        open,
        close,
        createDropdown
    };
}
exports.Dropdown = Dropdown;

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=dropdown.js.map