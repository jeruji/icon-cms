export default {
  name: 'schedule',
  type: 'document',
  title: 'Schedule',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'dateStart',
      type: 'datetime',
      title: 'Date Start',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'dateEnd',
      type: 'datetime',
      title: 'Date End',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'note',
      type: 'string',
      title: 'Note',
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              type: 'image',
              name: 'logo',
              title: 'Logo',
            },
            {
              type: 'string',
              name: 'alt',
              title: 'Alt Text',
            },
          ],
        },
      ],
      options: {
        hotspot: true,
      },
    },
  ],
}
