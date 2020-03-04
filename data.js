const channels = {
  'general': {
    channelId: 1,
    channelName: 'general',
    messages: [
      {
        messageID: 1,
        postedByID: 1,
        channelId: 1,
        postedBy: 'Dave',
        channelName: 'general',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Dave in general'
      },
      {
        messageID: 2,
        postedByID: 2,
        channelId: 1,
        postedBy: 'Sarah',
        channelName: 'general',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Sarah in general'
      },
      {
        messageID: 3,
        postedByID: 3,
        channelId: 1,
        postedBy: 'Zack',
        channelName: 'general',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Zack in general'
      }
    ]
  },
  'help': {
    channelId: 2,
    channelName: 'help',
    messages: [
      {
        messageID: 4,
        postedByID: 1,
        channelId: 2,
        postedBy: 'Dave',
        channelName: 'help',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Dave in help'
      },
      {
        messageID: 5,
        postedByID: 2,
        channelId: 2,
        postedBy: 'Sarah',
        channelName: 'help',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Sarah in help'
      },
      {
        messageID: 6,
        postedByID: 3,
        channelId: 2,
        postedBy: 'Zack',
        channelName: 'help',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Zack in help'
      }
    ]
  },
  'react': {
    channelId: 3,
    channelName: 'react',
    messages: [
      {
        messageID: 7,
        postedByID: 1,
        channelId: 3,
        postedBy: 'Dave',
        channelName: 'react',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Dave in react'
      },
      {
        messageID: 8,
        postedByID: 2,
        channelId: 3,
        postedBy: 'Sarah',
        channelName: 'react',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Sarah in react'
      },
      {
        messageID: 9,
        postedByID: 3,
        channelId: 3,
        postedBy: 'Zack',
        channelName: 'react',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Zack in react'
      }
    ]
  },
  'redux': {
    channelId: 4,
    channelName: 'redux',
    messages: [
      {
        messageID: 10,
        postedByID: 4,
        channelId: 4,
        postedBy: 'Pam',
        channelName: 'redux',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Pam in redux'
      },
      {
        messageID: 11,
        postedByID: 5,
        channelId: 4,
        postedBy: 'Erin',
        channelName: 'redux',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Erin in redux'
      },
      {
        messageID: 12,
        postedByID: 6,
        channelId: 4,
        postedBy: 'Joe',
        channelName: 'redux',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Joe in redux'
      }
    ]
  },
  'webpack': {
    channelId: 5,
    channelName: 'webpack',
    messages: [
      {
        messageID: 13,
        postedByID: 4,
        channelId: 5,
        postedBy: 'Pam',
        channelName: 'webpack',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Pam in webpack'
      },
      {
        messageID: 14,
        postedByID: 5,
        channelId: 5,
        postedBy: 'Erin',
        channelName: 'webpack',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Erin in webpack'
      },
      {
        messageID: 15,
        postedByID: 6,
        channelId: 5,
        postedBy: 'Joe',
        channelName: 'webpack',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Joe in webpack'
      }
    ]
  },
  'react-router': {
    channelId: 6,
    channelName: 'reactrouter',
    messages: [
      {
        messageID: 16,
        postedByID: 4,
        channelId: 6,
        postedBy: 'Pam',
        channelName: 'react-router',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Pam in react-router'
      },
      {
        messageID: 17,
        postedByID: 5,
        channelId: 6,
        postedBy: 'Erin',
        channelName: 'react-router',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Erin in react-router'
      },
      {
        messageID: 18,
        postedByID: 6,
        channelId: 6,
        postedBy: 'Joe',
        channelName: 'react-router',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Joe in react-router'
      }
    ]
  }
};

const people = {
  Dave: {
    userID: 1,
    userName: 'Dave',
    messages: [
      {
        messageID: 1,
        postedByID: 1,
        channelId: 1,
        postedBy: 'Dave',
        channelName: 'general',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Dave in general'
      },
      {
        messageID: 4,
        postedByID: 1,
        channelId: 2,
        postedBy: 'Dave',
        channelName: 'help',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Dave in help'
      },
      {
        messageID: 7,
        postedByID: 1,
        channelId: 3,
        postedBy: 'Dave',
        channelName: 'react',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Dave in react'
      }
    ]
  },
  Sarah: {
    userID: 2,
    userName: 'Sarah',
    messages: [
      {
        messageID: 2,
        postedByID: 2,
        channelId: 1,
        postedBy: 'Sarah',
        channelName: 'general',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Sarah in general'
      },
      {
        messageID: 5,
        postedByID: 2,
        channelId: 2,
        postedBy: 'Sarah',
        channelName: 'help',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Sarah in help'
      },
      {
        messageID: 8,
        postedByID: 2,
        channelId: 3,
        postedBy: 'Sarah',
        channelName: 'react',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Sarah in react'
      }
    ]
  },
  Zack: {
    userID: 3,
    userName: 'Zack',
    messages: [
      {
        messageID: 3,
        postedByID: 3,
        channelId: 1,
        postedBy: 'Zack',
        channelName: 'general',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Zack in general'
      },
      {
        messageID: 6,
        postedByID: 3,
        channelId: 2,
        postedBy: 'Zack',
        channelName: 'help',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Zack in help'
      },
      {
        messageID: 9,
        postedByID: 3,
        channelId: 3,
        postedBy: 'Zack',
        channelName: 'react',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Zack in react'
      }
    ]
  },
  Pam: {
    userID: 4,
    userName: 'Pam',
    messages: [
      {
        messageID: 10,
        postedByID: 4,
        channelId: 4,
        postedBy: 'Pam',
        channelName: 'redux',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Pam in redux'
      },
      {
        messageID: 13,
        postedByID: 4,
        channelId: 5,
        postedBy: 'Pam',
        channelName: 'webpack',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Pam in webpack'
      },
      {
        messageID: 16,
        postedByID: 4,
        channelId: 6,
        postedBy: 'Pam',
        channelName: 'react-router',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Pam in react-router'
      }
    ]
  },
  Erin: {
    userID: 5,
    userName: 'Erin',
    messages: [
      {
        messageID: 11,
        postedByID: 5,
        channelId: 4,
        postedBy: 'Erin',
        channelName: 'redux',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Erin in redux'
      },
      {
        messageID: 14,
        postedByID: 5,
        channelId: 5,
        postedBy: 'Erin',
        channelName: 'webpack',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Erin in webpack'
      },
      {
        messageID: 17,
        postedByID: 5,
        channelId: 6,
        postedBy: 'Erin',
        channelName: 'react-router',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Erin in react-router'
      }
    ]
  },
  Joe: {
    userID: 6,
    userName: 'Joe',
    messages: [
      {
        messageID: 12,
        postedByID: 6,
        channelId: 4,
        postedBy: 'Joe',
        channelName: 'redux',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Joe in redux'
      },
      {
        messageID: 15,
        postedByID: 6,
        channelId: 5,
        postedBy: 'Joe',
        channelName: 'webpack',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Joe in webpack'
      },
      {
        messageID: 18,
        postedByID: 6,
        channelId: 6,
        postedBy: 'Joe',
        channelName: 'react-router',
        timestamp: 'WED JUL 27 2016 22:15:06 GMT-0400(EDT)',
        content: 'A message posted by Joe in react-router'
      }
    ]
  }
};

module.exports = { channels, people };

