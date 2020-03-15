# playground
Working on example writteli setup

# Ideas

Basic config file example for writteli project:

```
{
  theme: {
    url: 'path/to/theme/root/folder/',
    constants: {
      year: 2020
    }
  },
  content: {
    src: 'path/to/content/root/folder/',
    homepage: 'home'
    pages: {
      home: {
        layout: 'home.pug',
        type: 'single',
        content: 'home.md',
        constants: {
          activeMenu: 'home'
        }
      },
      about: {
        layout: 'about.pug',
        type: 'single',
        content: 'about.md',
        constants: {
          activeMenu: 'about'
        }
      },
      experience: {
        layout: 'experience.pug',
        type: 'single',
        content: 'experience.md',
        constants: {
          activeMenu: 'experience'
        }
      },
      notes: {
        layout: 'notes.pug',
        type: 'list',
        pagination: {
          limit: 10,
          slug: 'page'
        },
        entry: {
          layout: 'single-note.pug',
          content: '/notes/'
        },
        constants: {
          activeMenu: 'notes'
        }
      },
      projects: {
        layout: 'projects.pug',
        type: 'list',
        entry: {
          layout: '',
          content: '/projects/'
        },
        constants: {
          activeMenu: 'projects'
        }
      }
    }
  }
}
```
