import { ScrollSmooth } from "./modules/scroll-suave.js";
import { Accordion } from "./modules/accordion.js";
import { Tabnav } from "./modules/tabnav.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import outsideClick from "./modules/outsideclick.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSmooth = new ScrollSmooth("[data-menu='suave'] a[href^='#']");
scrollSmooth.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new Tabnav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

initAnimacaoScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
