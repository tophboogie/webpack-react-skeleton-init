# Webpack React Skeleton Init

Development environment pre-configured with webpack, react, react-router, skeleton-css, and sass

To use:

- Install VirtualBox and Vagrant
- Install recommended Vagrant plugins
    - `vagrant plugin install vagrant-vbguest`
    - `vagrant plugin install vagrant-notify-forwarder`
- Launch Vagrant environment:
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
