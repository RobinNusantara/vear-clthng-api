import {createSelector} from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectories = createSelector(
    [selectDirectory],
    (directory) => directory.sections,
);
