import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ColorsI, ColorTypes } from '@/types/colors';
import { DroppedComponentI } from '@/types/component';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const updateNestedObject = (
  obj: DroppedComponentI,
  id: string,
  key: string,
  newValue: string,
) => {
  if (obj.id === id) {
    return { ...obj, properties: { ...obj.properties, [key]: newValue } };
  }

  if (obj.properties.child) {
    return {
      ...obj,
      properties: {
        ...obj.properties,
        child: obj.properties.child.map((el: DroppedComponentI) =>
          updateNestedObject(el, id, key, newValue),
        ),
      },
    };
  }
};

export const toggleObjectLock = (obj: ColorsI, key: ColorTypes) => {
  if (!Object.hasOwn(obj, key)) return;

  const isLocked: boolean = obj[`${key}_locked`] || false;

  Object.defineProperty(obj, key, {
    writable: !isLocked,
    configurable: false,
  });

  obj[`${key}_locked`] = !isLocked;
};
