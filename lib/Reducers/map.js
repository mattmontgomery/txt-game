import areas from 'Constants/areas';

const initialState = {
    areas,
    coordinates: [0, 0]
}

export default function location(state = initialState, { type }) {
    const { areas, coordinates } = state;
    switch(type) {
        case 'MAP_MOVE_NORTH':
            return {
                ...state,
                coordinates: [
                    coordinates[0] - 1 === -1 ? areas[coordinates[1]].length - 1 : coordinates[0] - 1,
                    coordinates[1]
                ]
            };
        case 'MAP_MOVE_SOUTH':
            return {
                ...state,
                coordinates: [
                    coordinates[0] + 1 === areas[coordinates[1]].length ? 0 : coordinates[0] + 1,
                    coordinates[1]
                ]
            };
        case 'MAP_MOVE_WEST':
            return {
                ...state,
                coordinates: [
                    coordinates[0],
                    coordinates[1] - 1 === -1 ? areas.length - 1 : coordinates[1] - 1
                ]
            };
        case 'MAP_MOVE_EAST':
            return {
                ...state,
                coordinates: [
                    coordinates[0],
                    coordinates[1] + 1 === areas.length ? 0 : coordinates[1] + 1
                ]
            };
        default:
            return state;
    }
}
