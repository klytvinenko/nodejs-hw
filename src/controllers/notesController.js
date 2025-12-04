import { Notes } from '../models/note.js';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res) => {
  const {notesId} = req.params;
  const notes = await Notes.findById(notesId);

  if (!notes) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(notes);
};

export const createNote = async (req, res) => {
  const notes = await Notes.create(req.body);
  res.status(201).json(notes);
};

export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const notes = await Notes.findOneAndDelete({
    _id: noteId,
  });

  if (!notes) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(notes);
};

export const updateNote = async (req, res) => {
  const { noteId } = req.params;

  const notes = await Notes.findOneAndUpdate({ _id: noteId }, req.body, {
    new: true,
  });
  if (!notes) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(notes);
};
