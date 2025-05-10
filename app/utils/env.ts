export function getEnv(key: string) {
    if (key.startsWith('VITE_')) return import.meta.env[key] as string | undefined
    else return process.env[key]
}
