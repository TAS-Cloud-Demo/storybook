import React from 'react';
import { action } from '@storybook/addon-actions';
import { ResetWrapper } from '@storybook/components';
import { ArgRow } from './ArgRow';
import { TableWrapper } from './ArgsTable';

export default {
  component: ArgRow,
  decorators: [
    (getStory) => (
      <ResetWrapper>
        <TableWrapper>
          <tbody>{getStory()}</tbody>
        </TableWrapper>
      </ResetWrapper>
    ),
  ],
};

const baseArgs = {
  updateArgs: action('updateArgs'),
};

export const String = {
  args: {
    ...baseArgs,
    row: {
      key: 'someString',
      name: 'Some String',
      description: 'someString description',
      type: {
        required: true,
      },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'reallylongstringnospaces',
        },
      },
    },
  },
};

export const LongName = {
  args: {
    ...baseArgs,
    row: { ...String.args.row, name: 'Really Long String That Takes Up Space' },
  },
};

export const LongDesc = {
  args: {
    ...baseArgs,
    row: {
      ...String.args.row,
      description: 'really long description that takes up a lot of space. sometimes this happens.',
    },
  },
};

export const Boolean = {
  args: {
    ...baseArgs,
    row: {
      key: 'someBoolean',
      name: 'Some Boolean',
      description: 'someBoolean description',
      type: {
        required: true,
      },
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'fixme',
        },
      },
    },
  },
};

export const Color = {
  args: {
    ...baseArgs,
    row: {
      key: 'someColor',
      name: 'Some Color',
      type: {
        name: 'string',
      },
      description: 'someColor description',
      defaultValue: '#ff0',
      control: {
        type: 'color',
      },
    },
  },
};

export const Date = {
  args: {
    ...baseArgs,
    row: {
      key: 'someDate',
      name: 'Some Date',
      type: {
        name: 'string',
      },
      description: 'someDate description',
      control: {
        type: 'date',
      },
    },
  },
};

export const Number = {
  args: {
    ...baseArgs,
    row: {
      key: 'someNumber',
      name: 'Some Number',
      description: 'someNumber description',
      type: {
        required: false,
      },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '0',
        },
      },
      control: {
        type: 'number',
      },
    },
  },
};

export const Range = {
  args: {
    ...baseArgs,
    row: {
      ...Number.args.row,
      control: {
        type: 'range',
      },
    },
  },
};

export const Radio = {
  args: {
    ...baseArgs,
    row: {
      key: 'someEnum',
      name: 'Some Enum',
      description: 'someEnum description',
      control: {
        type: 'radio',
        options: ['a', 'b', 'c'],
      },
    },
  },
};

export const InlineRadio = {
  args: {
    ...baseArgs,
    row: { ...Radio.args.row, control: { ...Radio.args.row.control, type: 'inline-radio' } },
  },
};

export const Check = {
  args: {
    ...baseArgs,
    row: { ...Radio.args.row, control: { ...Radio.args.row.control, type: 'check' } },
  },
};

export const InlineCheck = {
  args: {
    ...baseArgs,
    row: { ...Radio.args.row, control: { ...Radio.args.row.control, type: 'inline-check' } },
  },
};

export const Select = {
  args: {
    ...baseArgs,
    row: { ...Radio.args.row, control: { ...Radio.args.row.control, type: 'select' } },
  },
};

export const MultiSelect = {
  args: {
    ...baseArgs,
    row: { ...Radio.args.row, control: { ...Radio.args.row.control, type: 'multi-select' } },
  },
};

export const ObjectOf = {
  args: {
    ...baseArgs,
    row: {
      key: 'someObject',
      name: 'Some Object',
      description: 'A simple `objectOf` propType.',
      table: {
        type: {
          summary: 'objectOf(number)',
        },
        defaultValue: {
          summary: '{ key: 1 }',
        },
      },
      control: {
        type: 'object',
      },
    },
  },
};

export const ArrayOf = {
  args: {
    ...baseArgs,
    row: {
      key: 'someArray',
      name: 'Some Array',
      description: 'array of a certain type',
      table: {
        type: {
          summary: 'number[]',
        },
        defaultValue: {
          summary: '[1, 2, 3]',
        },
      },
      control: {
        type: 'array',
      },
    },
  },
};

export const ComplexObject = {
  args: {
    ...baseArgs,
    row: {
      key: 'someComplex',
      name: 'Some Complex',
      description: 'A very complex `objectOf` propType.',
      table: {
        type: {
          summary: 'object',
          detail: `[{
      id: number,
      func: func,
      arr: [{ index: number }]
    }]`,
        },
        defaultValue: {
          summary: 'object',
          detail: `[{
      id: 1,
      func: () => {},
      arr: [{ index: 1 }]
    }]`,
        },
      },
      control: {
        type: 'object',
      },
    },
  },
};

export const Func = {
  args: {
    ...baseArgs,
    row: {
      key: 'concat',
      name: 'Concat',
      description: 'concat 2 string values.',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: '(a: string, b: string) => string',
        },
        defaultValue: {
          summary: 'func',
          detail: '(a, b) => { return a + b; }',
        },
        jsDocTags: {
          params: [
            {
              name: 'a',
              description: 'The first string',
            },
            {
              name: 'b',
              description: 'The second string',
            },
          ],
          returns: {
            description: 'The concatenation of both strings',
          },
        },
      },
      control: false,
    },
  },
};

const enumeration =
  '"search" | "arrow-to-bottom" | "arrow-to-right" | "bell" | "check" | "check-circle"';
export const Enum = {
  args: {
    ...baseArgs,
    row: {
      key: 'enum',
      name: 'Some enum',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: enumeration,
        },
      },
    },
  },
};

const long_enumeration =
  '"search" | "arrow-to-bottom" | "arrow-to-right" | "bell" | "check" | "check-circle" | "chevron-up" | "chevron-down" | "chevron-left" | "chevron-right" | "envelope" | "exchange" | "file" | "file-check" | "file-import" | "file-pdf" | "file-times" | "pencil" | "question" | "question-circle" | "sitemap" | "user" | "times" | "plus" | "exclamation-triangle" | "trash-alt" | "long-arrow-up" | "long-arrow-down" | "long-arrow-left" | "long-arrow-right" | "external-link-alt" | "sticky-note" | "chart-line" | "spinner-third"';
export const LongEnum = {
  args: {
    ...baseArgs,
    row: {
      key: 'longEnum',
      name: 'Long enum',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: long_enumeration,
        },
      },
    },
  },
};

const complexUnion =
  '((a: string | SVGSVGElement) => void) | RefObject<SVGSVGElement | number> | [a|b] | {a|b}';
export const ComplexUnion = {
  args: {
    ...baseArgs,
    row: {
      key: 'complexUnion',
      name: 'Complex',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: complexUnion,
        },
      },
    },
  },
};

export const Markdown = {
  args: {
    ...baseArgs,
    row: {
      key: 'someString',
      name: 'Some String',
      description:
        'A `prop` can *support* __markdown__ syntax. This was ship in ~~5.2~~ 5.3. [Find more info in the storybook docs.](https://storybook.js.org/)',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
  },
};

export const StringCompact = {
  args: { ...String.args, compact: true },
};

export const StringNoControls = {
  args: {
    row: String.args.row,
  },
};

export const StringNoControlsCompact = {
  args: {
    row: String.args.row,
    compact: true,
  },
};
