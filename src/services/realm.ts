import Realm from 'realm';

import MoviesSchema from '../schemas/MoviesShema';

export default function getRealm() {
	return Realm.open({
		schema: [MoviesSchema],
		schemaVersion: 4,
		migration: (oldRealm, newRealm) => { },
	})
}
