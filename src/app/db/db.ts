import Dexie, { type EntityTable } from 'dexie';

export interface Task {
	id: number,
	date: string,
	task: string
}

export interface Activity {
	id: number,
	date: string,
	activity: string,
	log: string
}

export interface Vision {
	id: number,
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

TaskDb.version(1).stores({
	tasks: '++id, date, task',
});
ActivityDb.version(1).stores({
	activities: '++id, date, activity, log',
});
VisionDb.version(1).stores({
	visions: '++id, vision, parentId, childrenId'
});

export { TaskDb };
export { ActivityDb };
export { VisionDb };
