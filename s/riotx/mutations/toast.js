import { reject } from 'mout/array';
import ObjectAssign from 'object-assign';
import constants from '../../core/constants';

const generateID = () => {
  return `toast_${Date.now()}`;
};

export default {
  add: (context, obj) => {
    context.state.toast.list.push(ObjectAssign({
      type: 'normal',
      timeout: 3000,
      autoHide: true
    }, obj, {
      id: generateID()
    }));
    return [constants.CHANGE_TOAST];
  },

  remove: (context, toastID) => {
    context.state.toast.list = reject(context.state.toast.list, toast => {
      if (toast.id === toastID) {
        return true;
      }
      return false;
    });
    return [constants.CHANGE_TOAST];
  }
};