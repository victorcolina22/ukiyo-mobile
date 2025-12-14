# AGENTS.md

## Commands

- `npm start` - Start Expo development server
- `npm test` - Run Jest tests in watch mode
- `npm run lint` - Run ESLint for code quality
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator

## Code Style Guidelines

### Imports

- Group imports: React Native → External libraries → Local interfaces → Shared utilities → Components
- Use absolute imports with `@/` prefix for local files
- Example: `import { Text } from 'react-native'; import { apiService } from '@/services/api.adapter';`

### Formatting

- Use Prettier config: single quotes, trailing commas, 2 spaces, 80 char line width
- ESLint extends Expo and Prettier configs

### TypeScript

- Strict mode enabled
- Define interfaces for all component props
- Use proper typing for API responses and service methods

### Naming Conventions

- Components: PascalCase (e.g., `Genres`, `PaddingContainerView`)
- Files: kebab-case for folders, PascalCase for component files
- Hooks: camelCase with `use` prefix (e.g., `useBookScreen`)
- Services: PascalCase classes (e.g., `MangaService`)

### Error Handling

- Use try-catch blocks in service methods
- Log errors with `console.log(error)`
- Re-throw errors after logging

### Styling

- Use NativeWind (Tailwind CSS) classes
- Define global styles in `@/shared/theme`
- Prefer className over StyleSheet objects
