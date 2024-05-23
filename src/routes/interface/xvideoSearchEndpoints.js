/** @format */

const swaggerUI = {
  '/search/xvideos': {
    get: {
      tags: ['Search'],
      summary: 'Get videos from XVideos based on criteria',
      parameters: [
        {
          name: 'query',
          in: 'query',
          description: 'Search query',
          required: true,
          schema: {
            type: 'string',
          },
        },
        {
          name: 'short',
          in: 'query',
          description: 'Sorting criteria',
          schema: {
            type: 'string',
            enum: [
              'Relevance',
              'Upload date',
              'Rating',
              'Length',
              'Views',
              'Random',
            ],
            default: 'Relevance',
          },
        },
        {
          name: 'date',
          in: 'query',
          description: 'Date filter',
          schema: {
            type: 'string',
            enum: [
              'Anytime',
              'Last 3 days',
              'This week',
              'This month',
              'Last 3 months',
              'Last 6 months',
            ],
            default: 'Anytime',
          },
        },
        {
          name: 'duration',
          in: 'query',
          description: 'Video duration filter',
          schema: {
            type: 'string',
            enum: [
              'All',
              'Short videos (1-3min)',
              'Medium videos (3-10min)',
              'Long videos (+10min)',
              'Long videos (10-20min)',
              'Long videos (+20min)',
            ],
            default: 'All',
          },
        },
        {
          name: 'quality',
          in: 'query',
          description: 'Video quality filter',
          schema: {
            type: 'string',
            enum: ['All', '720P +', '1080P'],
            default: 'All',
          },
        },
        {
          name: 'page',
          in: 'query',
          description: 'Page number',
          schema: {
            type: 'integer',
            default: 1,
          },
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                    },
                    isChannel: {
                      type: 'boolean',
                    },
                    title: {
                      type: 'string',
                    },
                    url: {
                      type: 'string',
                    },
                    duration: {
                      type: 'string',
                    },
                    hdMark: {
                      type: 'string',
                    },
                    thumbnail: {
                      type: 'string',
                    },
                    thumbnailGif: {
                      type: 'string',
                    },
                    channelName: {
                      type: 'string',
                    },
                    channelHref: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default swaggerUI
