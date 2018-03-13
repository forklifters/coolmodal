import {getNode} from './utility';
import {initModal, initModalContent} from './modal';
import {initOverlay} from './overlay';
import CLASSNAME from '../class-list';

const {MODAL_OVERLAY, MODAL_OVERLAY_HAS_MODAL} = CLASSNAME;

export function createModal(options) {
  if (!getNode(MODAL_OVERLAY)) {
    initOverlay();
    initModal();
    getNode(MODAL_OVERLAY).classList.add(MODAL_OVERLAY_HAS_MODAL);
    initModalContent(options);
  }
}