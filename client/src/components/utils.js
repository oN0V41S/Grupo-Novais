export default function hanldeModalState(modalState, modalHookFunction) {
  if (modalState) {
    modalHookFunction(true);
  } else {
    modalHookFunction(false);
  }
}
