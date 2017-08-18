module.exports = {
  easyPath: `one.two.three`,
  easyData: {
    one: {
      two: {
        three: 'done!'
      }
    }
  },
  mediumPath: `one.two.three[0].four`,
  mediumData: {
    one: {
      two: {
        three: [
          {
            four: `done!`,
          },
        ],
      }
    }
  },
  hardPath: `[0].thing.tags[0].olaf`,
  hardData: [
    {
      thing: {
        _id: '{{objectId()}}',
        index: '{{index()}}',
        guid: '{{guid()}}',
        isActive: '{{bool()}}',
        balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
        picture: 'http://placehold.it/32x32',
        age: '{{integer(20, 40)}}',
        eyeColor: '{{random("blue", "brown", "green")}}',
        name: {
          first: '{{firstName()}}',
          last: '{{surname()}}'
        },
        company: '{{company().toUpperCase()}}',
        email: function (tags) {
          // Email tag is deprecated, because now you can produce an email as simple as this:
          return (this.name.first + '.' + this.name.last + '@' + this.company + tags.domainZone()).toLowerCase();
        },
        phone: '+1 {{phone()}}',
        address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
        about: '{{lorem(1, "paragraphs")}}',
        registered: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
        latitude: '{{floating(-90.000001, 90)}}',
        longitude: '{{floating(-180.000001, 180)}}',
        tags: [
          {
            olaf: 'done!'
          }
        ],
        range: 10,
        friends: [
          {
            'repeat(3)': {
              id: '{{index()}}',
              name: '{{firstName()}} {{surname()}}'
            }
          }
        ],
        greeting: function (tags) {
          return 'Hello, ' + this.name.first + '! You have ' + tags.integer(5, 10) + ' unread messages.';
        },
        favoriteFruit: function (tags) {
          var fruits = ['apple', 'banana', 'strawberry'];
          return fruits[tags.integer(0, fruits.length - 1)];
        }
      }
    }
  ],
};