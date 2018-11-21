import {sequelize} from './lib/common/sequelize';
import {Product} from './lib/products/product';
import {User} from './lib/users/user';

(async () => {
    try {
        sequelize.addModels([User]);
        await sequelize.sync({force: true});
        await User.create({
            name: 'Tony Stark',
            products: [
                {name: 'Ion Man Poster #1'},
            ],
        }, {include: [Product]});

    } catch (e) {
        console.error(e);
    }
})();