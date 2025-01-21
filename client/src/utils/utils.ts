import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { DroppedComponentI } from '@/types/component';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const updateNestedObject = (
  obj: DroppedComponentI,
  id: string,
  key: string,
  updates: string,
) => {
  if (obj.id === id) {
    return { ...obj, properties: { ...obj.properties, [key]: updates } };
  }

  if (obj.properties.child) {
    return {
      ...obj,
      properties: {
        ...obj.properties,
        child: obj.properties.child.map((el: DroppedComponentI) =>
          updateNestedObject(el, id, key, updates),
        ),
      },
    };
  }
};
