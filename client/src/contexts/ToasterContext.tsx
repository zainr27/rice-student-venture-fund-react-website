import { createContext, useContext, useReducer, Dispatch } from 'react';

type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  open: boolean;
};

type ToasterState = {
  toasts: Toast[];
};

type ToasterAction = {
  type: 'ADD_TOAST' | 'REMOVE_TOAST';
  toast?: Toast;
  id?: string;
};

const initialState: ToasterState = {
  toasts: [],
};

export const ToasterContext = createContext<{
  state: ToasterState;
  dispatch: Dispatch<ToasterAction>;
}>({ state: initialState, dispatch: () => null });

const toasterReducer = (state: ToasterState, action: ToasterAction): ToasterState => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, action.toast!],
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.id),
      };
    default:
      return state;
  }
};

export const ToasterProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(toasterReducer, initialState);

  return (
    <ToasterContext.Provider value={{ state, dispatch }}>
      {children}
    </ToasterContext.Provider>
  );
};

export const useToasterContext = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error('useToasterContext must be used within a ToasterProvider');
  }
  return context;
};