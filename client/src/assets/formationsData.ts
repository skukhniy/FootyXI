// 4-atb

interface formationTypes {
  f_442: string[];
  f_41212N: string[];
  f_41212W: string[];
}

export let formationPositions: formationTypes = {
  f_442: ['ls', 'rs', 'lm', 'lcm', 'rcm', 'rm', 'lb', 'lcb', 'rcb', 'rb', 'gk'],
  f_41212N: [
    'ls',
    'rs',
    'cam',
    'lcm',
    'rcm',
    'cdm',
    'lb',
    'lcb',
    'rcb',
    'rb',
    'gk',
  ],
  f_41212W: [
    'ls',
    'rs',
    'cam',
    'lm',
    'rm',
    'cdm',
    'lb',
    'lcb',
    'rcb',
    'rb',
    'gk',
  ],
};

export let formations = ['442', '41212N', '41212W'];
