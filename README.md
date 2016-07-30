# nickelright

Development environment for the nickelright music homepage

- Install VirtualBox and Vagrant
- Install Vagrant Plugins
    - `vagrant plugin install vagrant-vbguest`
    - `vagrant plugin install vagrant-notify-forwarder`
- Use:
    - `vagrant up`
    - `vagrant ssh`
    - `cd /vagrant`
- Install nodejs dependencies:
    - `npm install`
- Run webpack dev server:
    - `npm start`
    - open <http://localhost:3000/webpack-dev-server/> in your browser
- Compile to production folder:
    - `npm run build`
