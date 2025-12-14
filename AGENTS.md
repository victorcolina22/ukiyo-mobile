# AGENTS.md

## Commands

- `npm start` - Start Expo development server
- `npm test` - Run Jest tests in watch mode
- `npm test -- --testNamePattern="testName"` - Run single test
- `npm run lint` - Run ESLint for code quality
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator

## Code Style Guidelines

### Imports

- Group: React Native → External libraries → Local interfaces → Shared utilities → Components
- Use absolute imports with `@/` prefix for local files
- Example: `import { Text } from 'react-native'; import { apiService } from '@/services/api.adapter';`

### Formatting

- Prettier: single quotes, trailing commas, 2 spaces, 80 char line width
- ESLint extends Expo and Prettier configs

### TypeScript

- Strict mode enabled, define interfaces for all component props
- Use proper typing for API responses and service methods

### Naming Conventions

- Components: PascalCase (`Genres`, `PaddingContainerView`)
- Files: kebab-case folders, PascalCase component files
- Hooks: camelCase with `use` prefix (`useBookScreen`)
- Services: PascalCase classes (`MangaService`)

### Error Handling

- Use try-catch in service methods, log with `console.log(error)`, re-throw after logging

### Styling

- Use NativeWind (Tailwind CSS) classes, define global styles in `@/shared/theme`
- Prefer className over StyleSheet objects
