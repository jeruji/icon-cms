export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'place',
      type: 'text',
      title: 'Place',
    },
    {
      name: 'dateStart',
      type: 'date',
      title: 'Date Start',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'dateEnd',
      type: 'date',
      title: 'Date End',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
  ],
}
