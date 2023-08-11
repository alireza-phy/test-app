class RecordController {

    search(list: any[], searchConfig: any) {
        let newList: any[] = [];
        if (searchConfig?.length > 0) {
            let searchResult: any[] = [];
            searchConfig?.map((each: any) => {
                list?.map((_) => {
                    if (typeof each.property === "string") {
                        if (

                            (_?.[each?.property] + "")
                                ?.toLowerCase()
                                ?.includes(each.query.toLowerCase())
                        ) {
                            const isExistBefore = searchResult?.some(item => item?.id === _?.id)
                            !isExistBefore && searchResult.push(_);
                        }
                    } else {

                        let value = _;
                        each?.property?.forEach((q: any) => {
                            value = value?.[q];
                        });
                        if ((value + "")?.toLowerCase()?.includes(each?.query.toLowerCase())) {
                            const isExistBefore = searchResult?.some(item => item?.id === _?.id)
                            !isExistBefore && searchResult.push(_);
                        }
                    }
                    return;
                });
                return;
            });
            newList = [...newList, ...searchResult];
        }
        return newList;
    }
    sort(list: any[], sortConfig: any) {
        if (typeof sortConfig?.property === "string") {
            const sortList = list?.sort((i, j) => {
                let i_ = i[sortConfig.property];
                let j_ = j[sortConfig.property];
                if (sortConfig.type && sortConfig.type === "date") {
                    i_ = new Date(i_).getTime();
                    j_ = new Date(j_).getTime();
                }

                if (sortConfig.query === 1) return i_ - j_;
                else return j_ - i_;
            });
            return sortList;
        } else
            list?.sort((i, j) => {
                let i_ = i;
                sortConfig?.property?.forEach((q: any) => {
                    i_ = i_?.[q];
                });
                let j_ = j;
                sortConfig?.property?.forEach((q: any) => {
                    j_ = j_?.[q];
                });

                if (sortConfig.type && sortConfig.type === "date") {
                    i_ = new Date(i_).getTime();
                    j_ = new Date(j_).getTime();
                }

                if (sortConfig.query === 1) return i_ - j_;
                else return j_ - i_;
            });
    }

}
export default new RecordController();
