/** @format */

function createRandomEndpoint(country) {
  return {
    get: {
      tags: ['Random'],
      parameters: [
        {
          name: 'genre',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
            enum: [
              'office',
              'pantyhose',
              'dp',
              'cock-torture',
              'encasement',
              'maids',
              'high-heels',
              'college-girls',
              'lingerie',
              'dirty-talk',
              'feminization',
              'sexy-legs',
              'russian',
              'mature',
              'stockings',
              'jerkoff-instructions',
              'cfnm',
              'enema',
              'old-and-young',
              'plus-size',
              'glasses',
              'milf',
              'pov',
              'corset',
              'footfetish',
              'uniform',
              'footjob',
              'squirting',
              'anal',
              'nurses',
              'schoolgirls',
              'vintage-retro',
              'zettai-ryouiki',
              'zettai-pantsu',
              'fisting',
              'spandex',
              'crossdressing',
              'leather',
              'butts',
              'big-tits',
              'transformation',
              'strapon',
              'spitting',
              'deep-throat',
              'bisexual',
              'cheerleaders',
              'sex-toys',
              'granny',
              'close-up',
              'homemade',
              'rubber-latex',
              'trampling',
              'boots',
              'rough-sex',
              'lesbian',
              'reality-porn',
              'cuckold',
              'insertions',
              'public-sex',
              'femdom',
              'handjob',
              'babes',
              'shemale',
              'gyno',
              'amateur',
              'sex-machines',
              'group-sex',
              'hardcore',
              'facesitting',
              'panties',
              'medical',
              'teen',
              'pissing',
              'pussy-licking',
              'ass-worship',
              'lezdom',
              'hairy-pussy',
              'whipping',
              'masturbation',
              'blowjob',
              'asian',
              'redhead',
              'interracial',
              'big-cock',
              'wet-messy',
              'ball-busting',
              'tattoos-piercings',
              'ebony',
              'gloryhole',
              'skinny',
              'cumshots',
              'pregnant',
              'softcore',
              'jeans',
              'latin',
              'smothering',
              'upskirt',
              'bdsm',
              'bondage',
              'bbw',
              'humiliation',
              'titjob',
              'spanking',
              'pornstars',
              'nude-sports',
              'indian',
              'smoking',
              'voyeur',
              'cosplay',
              '3d',
              'ass-to-mouth',
              'massage',
              'anime-art',
            ],
          },
          description: 'genre name',
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse',
              },
            },
          },
        },
      },
    },
  }
}

const randomEndpoints = {
  '/bokep/{genre}': createRandomEndpoint(),
}

export default randomEndpoints
