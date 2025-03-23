import Dexie, { Entity, type EntityTable } from 'dexie';

interface Task {
	id: string,
	date: string,
	task: string
}

interface Activity {
	id: string,
	date: string,
	activity: string,
	log: string
}

interface Vision {
	id: string,
	vision: string,
	parentId: string,
	childrenId: Array<string>
}

const TaskDb = new Dexie('TaskDatabase') as Dexie & {
	tasks: EntityTable<Task, 'id'>;
};

const ActivityDb = new Dexie('ActivityDatabase') as Dexie & {
	activities: EntityTable<Activity, 'id'>;
};

const VisionDb = new Dexie('VisionDatabase') as Dexie & {
	visions: EntityTable<Vision, 'id'>;
};
