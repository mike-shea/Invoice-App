import { ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface usePortalProps {
  elementId: string;
  componentToInsert: ReactNode;
}

export default function usePortal({ elementId, componentToInsert }: usePortalProps) {
  const newDiv = useMemo(() => {
    const exisitingDiv = document.querySelector(`#${elementId}`);
    if (exisitingDiv) return exisitingDiv;
    const element = document.createElement('div');
    element.id = elementId;
    document.body.appendChild(element);
    return element;
  }, [elementId]);

  const portal = createPortal(componentToInsert, document.querySelector(`#${elementId}`) ?? newDiv);

  return {
    portal
  };
}
