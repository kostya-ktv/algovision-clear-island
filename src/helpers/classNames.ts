type Mods = Record<string, boolean | string>

const classNames = (incomingClass: string, mods: Mods = {}, additional: Array<string | undefined> = []): string => {
    return [
        incomingClass,
        ...additional.filter(Boolean),
        ...Object.entries(mods).filter(([k, v]) => Boolean(v)).map(([k, v]) => k)
    ].join(' ')
}
export default classNames